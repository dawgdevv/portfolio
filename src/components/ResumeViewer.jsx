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
  ExternalLink,
} from "lucide-react";
import PropTypes from "prop-types";
import resumePdf from "../assets/Resume_backend_nishant.pdf"; // Adjust path if needed

// Match worker version to API version used by react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs`;

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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="bg-white dark:bg-zinc-900 border-4 border-white hover:border-black dark:border-zinc-800 dark:hover:border-zinc-600 shadow-neo-lg w-[95vw] h-[90vh] md:h-[95vh] max-w-6xl flex flex-col overflow-hidden relative"
    >
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-4 bg-gray-50 dark:bg-zinc-900 border-b-4 border-white hover:border-black dark:border-zinc-800 dark:text-white gap-4 md:gap-0 z-20">
        <h2 className="font-black text-lg md:text-xl uppercase tracking-tight truncate">
          Nishant Raj <span className="text-accent-color">//</span> Resume
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {/* Zoom Controls */}
          <div className="flex items-center bg-white dark:bg-zinc-800 border-2 border-transparent hover:border-black dark:border-zinc-700 rounded-none shadow-sm transition-all">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border-r border-gray-200 dark:border-zinc-700"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-xs font-bold w-12 text-center select-none tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 3.0}
              className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border-l border-gray-200 dark:border-zinc-700"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
          </div>

          {/* Page Navigation */}
          {numPages && numPages > 1 && (
            <div className="hidden sm:flex items-center bg-white dark:bg-zinc-800 border-2 border-transparent hover:border-black dark:border-zinc-700 rounded-none shadow-sm transition-all">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border-r border-gray-200 dark:border-zinc-700"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-bold px-3 select-none">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border-l border-gray-200 dark:border-zinc-700"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          <div className="h-6 w-px bg-gray-300 dark:bg-zinc-700 mx-1 hidden md:block"></div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-zinc-800 text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-white shadow-sm hover:shadow-none hover:translate-y-0.5 transition-all"
              title="Open in New Tab"
            >
              <ExternalLink size={18} />
            </a>

            <a
              href={resumePdf}
              download="Nishant_Raj_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-accent-color text-white font-bold text-sm uppercase tracking-wide border-2 border-transparent hover:border-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              title="Download Resume"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 bg-red-500 hover:bg-red-600 text-white border-2 border-transparent hover:border-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all md:ml-2"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Content Area */}
      <div className="flex-grow overflow-auto bg-gray-200 dark:bg-zinc-950/50 flex justify-center p-4 md:p-8 relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />

        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-accent-color rounded-full mb-4"></div>
            <p className="font-bold uppercase text-black dark:text-white tracking-widest animate-pulse">Loading Document...</p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 max-w-md">
              <h3 className="text-red-600 dark:text-red-400 font-bold text-lg mb-2">Error Loading Resume</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!error && (
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="flex justify-center shadow-2xl relative z-0"
            loading={null} // Handled by our custom loader
          >
            {numPages > 0 && (
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="pdf-page border border-gray-200 dark:border-zinc-800"
                width={window.innerWidth > 768 ? undefined : Math.min(window.innerWidth - 32, 500)} // Responsive width for mobile
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
