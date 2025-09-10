import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Md_Firoze_Hossain.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/firoze-hossain/portfolio/master/src/Assets/Md_Firoze_Hossain.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageHeight, setPageHeight] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onPageLoadSuccess = (page) => {
    // Set the height of the first page to avoid blank second page
    const scale = width > 786 ? 1.7 : 0.6;
    setPageHeight(page.getViewport({ scale }).height);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            overflow: "hidden",
            height: pageHeight ? pageHeight : "auto", // set height dynamically
          }}
        >
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page
              pageNumber={1} // Only first page
              scale={width > 786 ? 1.7 : 0.6}
              onLoadSuccess={onPageLoadSuccess} // Get page height
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
