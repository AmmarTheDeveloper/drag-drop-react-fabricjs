export default class UndoRedo {
    btnUndo;
    btnRedo;
    canvas;
    undoState;
    redoState;

    constructor( canvas ) {
        this.mods = 0,
            this.undoState = [],
            this.redoState = [],
            this.canvas = canvas;
        this.btnUndo = document.getElementById( 'btnUndo' );
        this.btnRedo = document.getElementById( 'btnRedo' );
        console.log( this.btnUndo );
        console.log( this.btnRedo );
        this.initListeners();
    }


    updateUI () {
        this.btnUndo.disabled = this.undoState.length <= 2 ? true : false;
        this.btnRedo.disabled = this.redoState.length == 0 ? true : false;
    }


    updateState () {
        var myjson = JSON.stringify( this.canvas );
        this.undoState.push( myjson );
        this.updateUI();
        console.log( "UNDO length ::" + this.undoState.length );
        console.log( "REDO length ::" + this.redoState.length );
        console.log( 'I am updating state for UNDO/REDO' );
    }


    undo () {

        console.log( "Undo" );
        var state = this.undoState.pop();
        var myjson = JSON.stringify( this.canvas );
        this.redoState.push( myjson );
        var self = this;
        this.canvas.clear();
        this.canvas.loadFromJSON( state ).then( function () {
            self.canvas.renderAll()
        } )
        console.log( "Undo length ::" + this.undoState.length );
        console.log( "Redo length ::" + this.redoState.length );
        this.updateUI();
    }

    redo () {
        console.log( "Redo" );
        var state = this.redoState.pop()
        var self = this;
        var myjson = JSON.stringify( this.canvas );
        this.undoState.push( myjson );
        this.canvas.clear();
        this.canvas.loadFromJSON( state ).then( function () {
            self.canvas.renderAll()
        } )
        console.log( "Undo length ::" + this.undoState.length );
        console.log( "Redo length ::" + this.redoState.length );
        this.updateUI();
    }

    clearAll () {
        this.undoState = [],
            this.redoState = [];
        this.updateUI();
        console.log( "UNDO length ::" + this.undoState.length );
        console.log( "REDO length ::" + this.redoState.length );
        console.log( 'I am clearing state for UNDO/REDO' );
    }

    initListeners () {
        this.btnUndo.addEventListener( 'click', () => {
            this.undo();
        } );

        this.btnRedo.addEventListener( 'click', () => {
            this.redo();
        } );
    }
}