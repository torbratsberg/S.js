/**
* The S class
* @param selector
*/
class S {
    /**
    * All matches from selector is stored in this property
    */
    items: NodeListOf<Element>;

    constructor(selector: string) {
        this.items = document.querySelectorAll(selector);
    }

    /**
    * Sets the width off all elements to be the same as the widest one.
    * @returns void
    */
    widthEqualize(): void {
        let widest = 0;
        for (const item of this.items as any) {
            if (item.offsetWidth > widest) {
                widest = item.offsetWidth;
            }
        }
        for (const item of this.items as any) {
            item.style.width = widest + 'px';
        }
    }

    /**
    * Sets the height off all elements to be the same as the tallest one.
    * @returns void
    */
    heightEqualize(): void {
        let tallest: number = 0;
        for (const item of this.items as any) {
            if (item.offsetHeight > tallest) {
                tallest = item.offsetHeight;
            }
        }
        for (const item of this.items as any) {
            item.style.height = tallest + 'px';
        }
    }

    /**
    * Styles element
    * @param property The CSS property to set
    * @param value The value to assign to the property
    * @returns void
    */
    css(property: string, value: string): void {
        for (const item of this.items as any) {
            item.style[property] = value;
        }
    }

    /**
    * Animates element
    * @param property The CSS property to set
    * @param value The value to assign to the property
    * @param duration The value to assign to the property
    * @returns void
    */
    animate(property: string, value: string, duration: string): void {
        for (const item of this.items as any) {
            item.style.originalTransitionDuration = item.style.transitionDuration;
            item.style.transitionDuration = duration + 'ms';
            item.style[property] = value;
            setTimeout(() => {
                item.style.transitionDuration = item.style.originalTransitionDuration;
            }, parseInt(duration));
        }
    }

    /**
    * Gets or sets text of elements
    * @param Text The text to give selected element
    * @returns string | undefined
    */
    text(newText?: string): string | undefined {
        if (newText) {
            for (const item of this.items as any) {
                item.innerHTML = newText;
            }
        } else {
            let textToReturn: string = '';
            for (const item of this.items as any) {
                textToReturn += item.innerHTML;
            }
            return textToReturn;
        }
    }

    /**
    * Adds event listener
    * @param event Which event to fire on
    * @param callback Function to run when event is fired
    * @returns void
    */
    on(event: string, callback: void): void {
        for (const item of this.items as any) {
            item.addEventListener(event, callback);
        }
        return;
    }

    /**
    * Adds class to element
    * @param className Name of class to add
    * @returns void
    */
    addClass(className: string): void {
        for (const item of this.items as any) {
            item.classList.add(className);
        }
    }

    /**
    * Removes class to element
    * @param className Name of class to add
    * @returns void
    */
    removeClass(className: string): void {
        for (const item of this.items as any) {
            item.classList.remove(className);
        }
    }

    /**
    * Toggles class
    * @param className Name of class to toggle
    * @returns void
    */
    toggleClass(className: string): void {
        for (const item of this.items as any) {
            if (item.classList.contains(className)) {
                item.classList.remove(className);
            } else {
                item.classList.add(className);
            }
        }
    }

    /**
    * Set href attribute
    * @param url Href value
    * @returns string | undefined
    */
    href(url: string): string | undefined {
        let item: any = this.items[0];
        if (url) {
            item.href = url;
        } else {
            return item.href;
        }
    }

    /**
    * Hides element by setting display to none
    * @returns void
    */
    hide(): void {
        for (const item of this.items as any) {
            item.style.originalDisplay = item.style.display;
            item.style.display = 'none';
        }
    }

    /**
    * Shows element by setting display to its orignal display value
    * @returns void
    */
    show(): void {
        for (const item of this.items as any) {
            item.style.display = item.style.originalDisplay;
        }
    }

    /**
    * Slides elements up or down
    * @param duration String of slide duration
    * @returns void
    * @todo Maybe use CSS class instead of JS
    */
    slideToggle(duration: string): void {
        for (const item of this.items as any) {
            if (!item.originalOffsetHeight) {
                console.log('does not have OG offsetHeight');
                // Store all original values
                item.originalOffsetHeight = item.offsetHeight;
                item.style.originalOverflowY = item.style.overflowY;
                item.style.originalPadding = item.style.padding;
                item.style.originalTransitionDuration = duration;
                item.style.overflow = 'hidden';
                item.style.transitionDuration = duration + 'ms';
                if (item.offsetHeight == item.originalOffsetHeight) {
                    console.log('slideup');
                    item.style.height = '0px';
                    item.style.padding = '0px';
                } else {
                    console.log('slidedown');
                    item.style.height = '100%';
                    item.style.padding = item.style.originalPadding;
                }
            } else {
                console.log('does have OG offsetHeight');
                item.style.overflow = 'hidden';
                item.style.transitionDuration = duration + 'ms';
                if (item.offsetHeight == item.originalOffsetHeight) {
                    console.log('slideup');
                    item.style.height = '0px';
                    item.style.padding = '0px';
                } else {
                    console.log('slidedown');
                    item.style.height = '100%';
                    item.style.padding = item.style.originalPadding;
                }
            }
        }
    }

}

(window as any).s = (selector: string) => {
    return new S(selector);
};
