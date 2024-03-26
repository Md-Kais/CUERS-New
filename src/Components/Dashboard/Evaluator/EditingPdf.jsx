import React, { useEffect, useState } from 'react';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const EditingPdf = () => {
    const [pdfInfo, setPdfInfo] = useState([]);
    async function loadPdf() {
        // Fetch an existing PDF document.
        const url = './demo.pdf';
        const existingPdfBytes = await fetch(url).then((res) =>
            res.arrayBuffer()
        );

        // Load a `PDFDocument` from the existing PDF bytes.
        return await PDFDocument.load(existingPdfBytes);
    }
    async function saveAndRender(doc) {
        // Serialize the `PDFDocument` to bytes (a `Uint8Array`).
        const pdfBytes = await doc.save();

        const pdfDataUri = await doc.saveAsBase64({ dataUri: true });
        setPdfInfo(pdfDataUri);
    }
    useEffect(() => {
        loadPdf().then((doc) => {
            pdfDoc = doc;
            return saveAndRender(pdfDoc);
        });
    }, []);

    return (
        <div>
            {
                <iframe
                    title="Edited PDF"
                    src={pdfInfo}
                    width="100%"
                    height="500px"
                />
            }
        </div>
    );
};

export default EditingPdf;
