// TODO: Draw functions
function Element(id) {
    // TODO: if (id === undefined) id = 'element' + 'TOIMPLEMENT';
    this.__id = id;
    this._children = [];
    this._parent = undefined;
    // Location
    this._x = 0;
    this._y = 0;
    this._z = 0;
    // Dimensions
    this._width = 0;
    this._height = 0;
    this._minWidth = 0;
    this._minHeight = 0;
    // TODO: this._maxWidth = 0;   WHAT COULD BE THE MAX?
    // TODO: this._maxHeight = 0;
    // Styling
    this._padding = [0, 0, 0, 0];
    this._margin = [0, 0, 0, 0];
    this._font = Font(10, 'Arial');
    // TODO: Implement a Border class
    // TODO: Background
    // TODO: Foreground Color

    // TODO: Different cursors?
    // TODO: Text-shadows/Box-shadows?

    // DRAW FLAGS
    this.drawBounds = true;
    this.drawLayout = true;
    this.drawStyles = true;
    this.drawColors = true;

    console.log('*** Element ***', this); // TODO: Remove before production
}

/* GLOBAL VARIABLES */

Element.prototype.getID = function () {
    return this.__id;
};

Element.prototype.create = function () {
    if (this._parent === undefined) return false;

    this._parent._div.append('<div id="' + this.__id + '"></div>');

    this._div = $('#' + this.__id);
    this._div.css('box-sizing', 'border-box');
};

Element.prototype.draw = function () {
    if (this.drawBounds) {
    }
    if (this.drawLayout) {
    }
    if (this.drawStyles) {
    }
    if (this.drawColors) {
    }
};

// Add a child element (become parent)
Element.prototype.add = function (child) {
    child.setParent(this);
    this._children.push(child);
    // TODO: CALL LAYOUT DRAW FLAG
};

// Remove a child element
Element.prototype.remove = function (child) {
    for (var i = 0; i < this._children.length; i++) {
        if (this._children[i] === child) {
            if (child._div !== undefined) {
                child._div.remove();
            }
            this._children.splice(i, 1);
            // TODO: DRAW LAYOUT FLAG
            // TODO: CHILD HANDLE REMOVE
            return;
        }
    }
};

// Set a parent element
Element.prototype.setParent = function (parent) {
    this._parent = parent;
    if (this._z === 0) this._z = this._parent._z + 1;
    // TODO: Inherit properties
};


Element.prototype.setFont = function (font) {
    if (font instanceof Font) {
        this._font = font;
    }
};

Element.prototype.getFont = function () {
    return this._font;
};

Element.prototype.setPadding = function (padding) {
    // Global padding
    if (padding.length === 1) this.padding = [padding[0], padding[0], padding[0], padding[0]];
    // Top-Bottom, Left-Right padding
    if (padding.length === 2) this.padding = [padding[0], padding[1], padding[0], padding[1]];
    // Specific padding
    if (padding.length === 4) this.padding = [padding[0], padding[1], padding[2], padding[3]];
};

Element.prototype.getPadding = function () {
    return this._padding;
};

Element.prototype.setMargin = function (margin) {
    // Global margin
    if (margin.length === 1) this.margin = [margin[0], margin[0], margin[0], margin[0]];
    // Top-Bottom, Left-Right margin
    if (margin.length === 2) this.margin = [margin[0], margin[1], margin[0], margin[1]];
    // Specific margin
    if (margin.length === 4) this.margin = [margin[0], margin[1], margin[2], margin[3]];
};

Element.prototype.getMargin = function () {
    return this._margin;
};


Element.prototype.getMinWidth = function () {
    return this._minWidth;
};
Element.prototype.setMinWidth = function (minWidth) {
    if (minWidth !== this._minWidth) {
        if (minWidth < 0) minWidth = 0;
        // TODO: if (minWidth > this._maxWidth) minWidth = this._maxWidth - 1;
        this._minWidth = minWidth;
    }
};
// TODO: Element.prototype.getMaxWidth = function () {return this._maxWidth;};
// TODO: Element.prototype.setMaxWidth = function() {};
Element.prototype.getMinHeight = function () {
    return this._minHeight;
};
Element.prototype.setMinHeight = function (minHeight) {
    if (minHeight !== this._minHeight) {
        if (minHeight < 0) minHeight = 0;
        // TODO: if (minHeight > this._maxHeight) minHeight = this._maxHeight - 1;
        this._minHeight = minHeight;
    }
};
// TODO: Element.prototype.getMaxHeight = function () {return this._maxHeight;};
// TODO: Element.prototype.setMaxHeight = function() {};


// Set bounds of an element
Element.prototype.setBounds = function (x, y, width, height) {
    // Make values whole numbers
    x = Math.floor(x);
    y = Math.floor(y);
    width = Math.floor(width);
    height = Math.floor(height);

    if (width < this._minWidth) width = this._minWidth;
    // TODO: if (width > this._maxWidth) width = this._maxWidth;

    if (height < this._minHeight) height = this._minHeight;
    // TODO: if (height > this._maxHeight) height = this._maxHeight;

    // Only apply changes if needed
    if (x !== this._x || y !== this._y || width !== this._width || height !== this._height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
};

Element.prototype.getX = function () {
    return this._x;
};
Element.prototype.setX = function (x) {
    if (this._x !== x) {
        this._x = x;
    }
};
Element.prototype.getY = function () {
    return this._y;
};
Element.prototype.setY = function (y) {
    if (this._y !== y) {
        this._y = y;
    }
};
Element.prototype.getZ = function () {
    return this._z;
};
Element.prototype.setZ = function (z) {
    if (this._z !== z) {
        this._z = z;
    }
};
Element.prototype.setLocation = function (x, y) {
    this.setBounds(x, y, this._width, this._height);
};
Element.prototype.setSize = function (width, height) {
    this.setBounds(this._x, this._y, width, height);
};

// Element.prototype.setFont = function() { };
Element.prototype.setSize = function (width, height) {
    this.setBounds(this._x, this._y, width, height);
};
