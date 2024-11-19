import { useCanvasContext } from "../context/context";

export function useCustomization () {

    const { selectedText, setSelectedText, fontSize, setFontSize, fabricCanvas, fontFamily, setFontFamily } = useCanvasContext();

    const handleTextSelection = ( e ) => {
        const selectedText = e.selected[ 0 ];
        console.log( selectedText );

        if ( selectedText ) {
            setSelectedText( selectedText );
            setFontSize( selectedText.fontSize );
            setFontFamily( selectedText.fontFamily );
        } else {
            setSelectedText( null );
        }
    };

    const changeTextSize = () => {
        if ( fabricCanvas && selectedText ) {
            selectedText.set( "fontSize", fontSize );
            fabricCanvas.renderAll();
        }
    }

    const removeSelectedText = () => {
        if ( fabricCanvas && selectedText ) {
            fabricCanvas.remove( selectedText );
            setSelectedText( null );
            fabricCanvas.discardActiveObject();
            fabricCanvas.renderAll();
        }
    }

    const changeTextFontWeight = () => {
        if ( fabricCanvas && selectedText ) {
            const currentFontWeight = selectedText.fontWeight;
            if ( currentFontWeight == "normal" ) {
                selectedText.set( "fontWeight", "bold" );
            } else {
                selectedText.set( "fontWeight", "normal" );

            }
            fabricCanvas.renderAll();
        }
    }

    const changeTextDecoration = () => {
        if ( fabricCanvas && selectedText ) {
            const isUnderlined = selectedText.underline;

            if ( isUnderlined ) {
                selectedText.set( "underline", false );
            } else {
                selectedText.set( "underline", true );

            }
            fabricCanvas.renderAll();
        }
    }

    const alignTextCenter = () => {
        if ( fabricCanvas && selectedText ) {
            const canvasWidth = fabricCanvas.getWidth();
            const textWidth = selectedText.width * selectedText.scaleX;
            const centerx = ( canvasWidth - textWidth ) / 2;
            selectedText.set( "left", centerx );
            fabricCanvas.renderAll();
        }
    }

    const changeTextFontStyle = () => {
        if ( fabricCanvas && selectedText ) {
            const currentFontStyle = selectedText.fontStyle;
            if ( currentFontStyle == "normal" ) {
                selectedText.set( "fontStyle", "italic" );
            } else {
                selectedText.set( "fontStyle", "normal" );

            }
            fabricCanvas.renderAll();
        }
    }

    const changeFontFamily = () => {
        if ( fabricCanvas && selectedText ) {
            selectedText.set( "fontFamily", fontFamily );
            fabricCanvas.renderAll();
        }
    }

    return { handleTextSelection, changeTextSize, removeSelectedText, changeTextFontWeight, changeTextFontStyle, changeTextDecoration, alignTextCenter, changeFontFamily }
}