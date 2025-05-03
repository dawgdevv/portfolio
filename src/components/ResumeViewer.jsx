import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { motion } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PropTypes from "prop-types";
import resumePdf from "../assets/Nishant_resu_may.pdf"; // Adjust path if needed

// Match worker version to API version used by react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs`;

// Rest of your component code remains the same
// Rest of your component remains the same
const ResumeViewer = ({ onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(loadError) {
    console.error("Failed to load PDF:", loadError);
    setError("Failed to load resume. Please try again later.");
    setIsLoading(false);
  }

  const goToPrevPage = () =>
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  const zoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  const zoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));

  // Handle escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl w-[90vw] h-[90vh] max-w-4xl flex flex-col overflow-hidden"
    >
      {/* Header Controls */}
      <div className="flex items-center justify-between p-3 bg-gray-800/50 border-b border-gray-700 text-white">
        <span className="font-semibold text-sm">Nishant Raj - Resume</span>
        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1 rounded hover:bg-gray-700 disabled:opacity-50"
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-xs w-10 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={scale >= 3.0}
            className="p-1 rounded hover:bg-gray-700 disabled:opacity-50"
          >
            <ZoomIn size={18} />
          </button>

          {/* Page Navigation */}
          {numPages && numPages > 1 && (
            <>
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-1 rounded hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-1 rounded hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Download Button */}
          <a
            href={resumePdf}
            download="Nishant_Raj_Resume.pdf"
            className="p-1 rounded hover:bg-gray-700 ml-2"
            title="Download Resume"
          >
            <Download size={18} />
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-red-500/50 ml-2 text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      {/* PDF Content Area */}
      <div className="flex-grow overflow-auto p-4 bg-gray-800/30 flex justify-center items-start">
        {isLoading && (
          <div className="text-gray-400 flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p>Loading resume...</p>
          </div>
        )}
        {error && (
          <div className="text-red-400 flex flex-col items-center justify-center h-full">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
            >
              Reload
            </button>
          </div>
        )}
        {!error && (
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="flex justify-center"
            loading={
              <div className="h-full w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-700 h-[800px] w-[600px] rounded"></div>
              </div>
            }
            error={<p className="text-red-400">Error rendering PDF.</p>}
          >
            {numPages > 0 && (
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-lg"
              />
            )}
          </Document>
        )}
      </div>
    </motion.div>
  );
};

ResumeViewer.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ResumeViewer;
