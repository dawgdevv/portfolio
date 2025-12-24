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
  X,
} from "lucide-react";
import PropTypes from "prop-types";
import resumePdf from "../assets/Resume_Nishant.pdf"; // Adjust path if needed

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
      className="bg-zinc-900 border-4 border-white hover:border-black shadow-neo-lg w-[95vw] h-[95vh] max-w-5xl flex flex-col overflow-hidden"
    >
      {/* Header Controls */}
      <div className="flex items-center justify-between p-4 bg-white border-b-4 border-white hover:border-black text-black">
        <span className="font-black text-lg uppercase tracking-tight">Nishant Raj - Resume</span>
        <div className="flex items-center gap-3">
          {/* Zoom Controls */}
          <div className="flex items-center border-2 border-white hover:border-black bg-white">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 hover:bg-gray-200 disabled:opacity-50 border-r-2 border-white hover:border-black"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-xs font-bold w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 3.0}
              className="p-2 hover:bg-gray-200 disabled:opacity-50 border-l-2 border-white hover:border-black"
            >
              <ZoomIn size={20} />
            </button>
          </div>

          {/* Page Navigation */}
          {numPages && numPages > 1 && (
            <div className="flex items-center border-2 border-white hover:border-black bg-white">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-2 hover:bg-gray-200 disabled:opacity-50 border-r-2 border-white hover:border-black"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-bold px-3">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-2 hover:bg-gray-200 disabled:opacity-50 border-l-2 border-white hover:border-black"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Download Button */}
          <a
            href={resumePdf}
            download="Nishant_Raj_Resume.pdf"
            className="p-2 bg-accent-color text-white border-2 border-white hover:border-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all ml-2"
            title="Download Resume"
          >
            <Download size={20} />
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 bg-red-500 text-white border-2 border-white hover:border-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all ml-2"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* PDF Content Area */}
      <div className="flex-grow overflow-auto p-8 bg-gray-100 dark:bg-zinc-800 flex justify-center items-start">
        {isLoading && (
          <div className="text-black dark:text-gray-400 flex flex-col items-center justify-center h-full">
            <div className="animate-spin h-12 w-12 border-4 border-white hover:border-black border-t-accent-color mb-4 bg-white/50"></div>
            <p className="font-bold uppercase">Loading resume...</p>
          </div>
        )}
        {error && (
          <div className="text-red-500 flex flex-col items-center justify-center h-full">
            <p className="font-bold">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent font-bold"
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
