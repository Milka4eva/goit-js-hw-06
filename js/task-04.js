const CountPlugin = function ({
    rootSelector,
    counterValue = 0,
    step = 1,
    } = {}) {
    this._value = counterValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
    this.updateNumber();
    };
    
CountPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.decrementButton = refs.container.querySelector('button[data-action="decrement"]');
    refs.incrementButton = refs.container.querySelector('button[data-action="increment"]');
    refs.value = refs.container.querySelector('#value');
    
    return refs;
    };
    
CountPlugin.prototype._bindEvents = function () {
    this._refs.decrementButton.addEventListener('click', () => {
    console.log('CountPlugin.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateNumber();
    });
    
    this._refs.incrementButton.addEventListener('click', () => {
    console.log('CountPlugin.prototype._bindEvents -> this', this);
    this.increment();
    this.updateNumber();
    });
    };
    
CountPlugin.prototype.updateNumber = function () {
    this._refs.value.textContent = this._value;
    };
    
CountPlugin.prototype.decrement = function () {
    this._value -= this._step;
    };
    
CountPlugin.prototype.increment = function () {
    this._value += this._step;
    };
    
    new CountPlugin({rootSelector: '#counter', step: 1, counterValue: 0});