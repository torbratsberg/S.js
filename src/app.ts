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
        return;
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
    * Styles element
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
}

(window as any).s = (selector: string) => {
    return new S(selector);
};

