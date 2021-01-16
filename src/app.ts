// Testing divs
let element = document.querySelector("body");
let foo = document.createElement("div");
foo.setAttribute("class", "box");
foo.setAttribute("style", "background: red; height: 10px; width: 100px; display: inline-block;");
element.appendChild(foo);
let bar = document.createElement("div");
bar.setAttribute("class", "box");
bar.setAttribute("style", "background: blue; height: 100px; width: 10px; display: inline-block;");
element.appendChild(bar);
let foobar = document.createElement("p");
foobar.setAttribute("class", "text");
foobar.setAttribute("style", "display: block;");
let text = document.createTextNode('My text');
foobar.appendChild(text);
element.appendChild(foobar);

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
    */
    widthEqualize() {
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
    */
    heightEqualize() {
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
    */
    css(property: string, value: string) {
        for (const item of this.items as any) {
            item.style[property] = value;
        }
    }

    /**
    * Animates element
    * @param property The CSS property to set
    * @param value The value to assign to the property
    * @param duration The value to assign to the property
    *
    * @todo Revert to original transition duration when finished
    */
    animate(property: string, value: string, duration: string) {
        this.css('transitionDuration', duration + 'ms');
        this.css(property, value);
    }

    /**
    * Changes text of elements
    * @param Text The text to give selected element
    */
    text(newText: string): string | undefined {
        if(newText) {
            this.items[0].innerHTML = newText;
        } else {
            return this.items[0].innerHTML;
        }
    }

    /**
    * Adds event listener
    * @param event Which event to fire on
    * @param callback Function to run when event is fired
    */
    on(event: string, callback: any) {
        for (const item of this.items as any) {
            item.addEventListener(event, callback);
        }
    }

    /**
    * Adds class to element
    * @param className Name of class to add
    */
    addClass(className: string) {
        for (const item of this.items as any) {
            item.classList.add(className);
        }
    }

    /**
    * Removes class to element
    * @param className Name of class to add
    */
    removeClass(className: string) {
        for (const item of this.items as any) {
            item.classList.remove(className);
        }
    }

    /**
    * Toggles class
    * @param className Name of class to toggle
    */
    toggleClass(className: string) {
        for (const item of this.items as any) {
            if(item.classList.contains(className)) {
                item.classList.remove(className);
            } else {
                item.classList.add(className);
            }
        }
    }

    /**
    * Get or set attributes
    * @param attributeName Name of the attribute
    * @param value OPTIONAL Value to give attributeName
    */
    attr(attributeName: string, value?: string) {
        for (const item of this.items as any) {
            if(value) {
                item.attributes[attributeName].nodeValue += ' ' + value;
            } else {
                return item.attributes[attributeName];
            }
        }
    }
}

(window as any).s = (selector: string) => {
    return new S(selector);
};

