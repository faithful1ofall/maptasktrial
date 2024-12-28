import React, { useState, lazy, Suspense } from 'react'

import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import './edit-terms-viewattachments.css'

const Alert1 = lazy(() => import('./alert1'))
const Alert = lazy(() => import('./alert'))
const Frame1618868946 = lazy(() => import('./frame1618868946'))

const EditTermsViewattachments = (props) => {
   const [showAlert1, setShowAlert1] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = () => {
      setShowAlert1(true)
    }

    const handleConfirm = () => {
      setShowAlert1(false)
      setIsLoading(true)
      // Simulate sending quote
      setTimeout(() => {
        setIsLoading(false)
        setShowAlert(true)
      }, 2000) // Show loading for 2 seconds
    }
  
    const handleCloseAlert = () => {
      setShowAlert(false)
    }
  


  return (
    <Layout>
      <Helmet>
        <title>exported project</title>
      </Helmet>
          <div className="edit-terms-viewattachments-frame16188681811">
         
            <div className="edit-terms-viewattachments-frame1618868182">
              <div className="edit-terms-viewattachments-frame1618868179">
                <div className="edit-terms-viewattachments-frame1618868154">
                  <div className="edit-terms-viewattachments-breadcrumb1">
                    <div className="edit-terms-viewattachments-container16">
                      <div className="edit-terms-viewattachments-content-separators">
                        <div className="edit-terms-viewattachments-content13">
                          <span className="edit-terms-viewattachments-text116 ParagraphSmallMedium">
                            Quotes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="edit-terms-viewattachments-breadcrumb2">
                    <div className="edit-terms-viewattachments-container17">
                      <div className="edit-terms-viewattachments-content-separator">
                        <div className="edit-terms-viewattachments-content14">
                          <span className="edit-terms-viewattachments-text117 ParagraphSmallMedium">
                           / Request for Quote
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="edit-terms-viewattachments-frame16188681891">
                  <div className="edit-terms-viewattachments-frame1618868105">
                    <div className="edit-terms-viewattachments-frame1618868106">
                      <div className="edit-terms-viewattachments-frame1618868103">
                        <div className="edit-terms-viewattachments-frame60770">
                          <div className="edit-terms-viewattachments-group606221">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="edititeminfo-ellipse12913"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                          >
                            <circle cx="25" cy="25" r="25" fill="none" stroke="grey" strokeWidth="2"/>
                            <text
                              x="50%"
                              y="50%"
                              fill="grey"
                              fontSize="20"
                              fontWeight="bold"
                              textAnchor="middle"
                              dy=".3em"
                            >
                              1
                            </text>
                          </svg>
                          </div>
                          <div className="edit-terms-viewattachments-frame16188681271">
                            <span className="edit-terms-viewattachments-text118 ParagraphMediumSemibold">
                              Request Information
                            </span>
                            <span className="edit-terms-viewattachments-text119 ParagraphXSmallRegular">
                              Provide details about this RFQ
                            </span>
                          </div>
                        </div>
                        <div className="edit-terms-viewattachments-frame60771">
                          <div className="edit-terms-viewattachments-group606222">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="edititeminfo-ellipse12913"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                          >
                            <circle cx="25" cy="25" r="25" fill="none" stroke="grey" strokeWidth="2"/>
                            <text
                              x="50%"
                              y="50%"
                              fill="grey"
                              fontSize="20"
                              fontWeight="bold"
                              textAnchor="middle"
                              dy=".3em"
                            >
                              2
                            </text>
                          </svg>
                          </div>
                          <div className="edit-terms-viewattachments-frame16188681272">
                            <span className="edit-terms-viewattachments-text120 ParagraphMediumSemibold">
                              Terms and Attachments
                            </span>
                            <span className="edit-terms-viewattachments-text121 ParagraphXSmallRegular">
                              Payment and delivery terms
                            </span>
                          </div>
                        </div>
                        <div className="edit-terms-viewattachments-frame60763">
                          <div className="edit-terms-viewattachments-group60621">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="edititeminfo-ellipse12913"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                          >
                            <circle cx="25" cy="25" r="25" fill="blue"/>
                            <text
                              x="50%"
                              y="50%"
                              fill="white"
                              fontSize="20"
                              fontWeight="bold"
                              textAnchor="middle"
                              dy=".3em"
                            >
                              3
                            </text>
                          </svg>
                          </div>
                          <div className="edit-terms-viewattachments-frame16188681273">
                            <span className="edit-terms-viewattachments-text122 ParagraphMediumSemibold">
                              Review
                            </span>
                            <span className="edit-terms-viewattachments-text123 ParagraphXSmallRegular">
                              Confirm all information provided
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="edit-terms-viewattachments-frame1618868722">
                    <div className="edit-terms-viewattachments-frame1618868783">
                      <div className="edit-terms-viewattachments-items">
                        <div className="edit-terms-viewattachments-frame427320328">
                          <div className="edit-terms-viewattachments-frame427320351">
                            <span className="edit-terms-viewattachments-text124 HeadingH6Semibold">
                              Request Information
                            </span>
                          </div>
                          <img
                            alt="iconpenciledit1332"
                            src="/external/icon-edit.svg"
                            className="edit-terms-viewattachments-iconpenciledit"
                          />
                        </div>
                        <div className="edit-terms-viewattachments-frame427320327">
                          <div className="edit-terms-viewattachments-frame427320552">
                            <div className="edit-terms-viewattachments-frame427320551">
                              <div className="edit-terms-viewattachments-frame4273205611">
                                <span className="edit-terms-viewattachments-text125 Paragraph-MediumMedium">
                                  Title
                                </span>
                                <span className="edit-terms-viewattachments-text126 Paragraph-MediumMedium">
                                  Request for Equipments
                                </span>
                              </div>
                            </div>
                            <div className="edit-terms-viewattachments-frame427320558">
                              <div className="edit-terms-viewattachments-frame4273205612">
                                <span className="edit-terms-viewattachments-text127 Paragraph-MediumMedium">
                                  RFQ No
                                </span>
                                <span className="edit-terms-viewattachments-text128 Paragraph-MediumMedium">
                                  #RQ 01234
                                </span>
                              </div>
                            </div>
                            <div className="edit-terms-viewattachments-frame427320566">
                              <div className="edit-terms-viewattachments-frame427320563">
                                <span className="edit-terms-viewattachments-text129 Paragraph-MediumMedium">
                                  Requestor
                                </span>
                                <div className="edit-terms-viewattachments-frame1618868415">
                                  <div className="edit-terms-viewattachments-leadingmedia1">
                                    <div className="edit-terms-viewattachments-avatars3">
                                      <img
                                        alt="ImageI133"
                                        src="/external/imagei119-j789-200h.png"
                                        className="edit-terms-viewattachments-image3"
                                      />
                                      <span className="edit-terms-viewattachments-text130 ParagraphSmallSemibold">
                                        JD
                                      </span>
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-frame1618868414">
                                    <span className="edit-terms-viewattachments-text131 Paragraph-MediumMedium">
                                      Jane Doe
                                    </span>
                                    <img
                                      alt="Ellipse12921332"
                                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                                      className="edit-terms-viewattachments-ellipse1292"
                                    />
                                    <span className="edit-terms-viewattachments-text132">
                                      Head Nurse, Paediatrics
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="edit-terms-viewattachments-frame427320564">
                              <div className="edit-terms-viewattachments-frame4273205613">
                                <span className="edit-terms-viewattachments-text133 Paragraph-MediumMedium">
                                  Department
                                </span>
                                <span className="edit-terms-viewattachments-text134 Paragraph-MediumMedium">
                                  Maternity
                                </span>
                              </div>
                            </div>
                            <div className="edit-terms-viewattachments-frame427320565">
                              <div className="edit-terms-viewattachments-frame4273205614">
                                <span className="edit-terms-viewattachments-text135 Paragraph-MediumMedium">
                                  Expected delivery date
                                </span>
                                <span className="edit-terms-viewattachments-text136 Paragraph-MediumMedium">
                                  2024-12-02
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-terms-viewattachments-frame16188681812">
                        <div className="edit-terms-viewattachments-frame1618868753">
                          <div className="edit-terms-viewattachments-frame1618868752">
                            <div className="edit-terms-viewattachments-frame1618868751">
                              <span className="edit-terms-viewattachments-text137 HeadingH6Semibold">
                                Item(s)
                              </span>
                            </div>
                          </div>
                          <div className="edit-terms-viewattachments-frame1618868187">
                            <div className="edit-terms-viewattachments-frame1618868867">
                              <div className="edit-terms-viewattachments-frame1000007522">
                                <div className="edit-terms-viewattachments-header2">
                                  <div className="edit-terms-viewattachments-table-master-header1">
                                    <div className="edit-terms-viewattachments-container18">
                                      <div className="edit-terms-viewattachments-form-control-element">
                                        <img
                                          alt="OuterRectangleI133"
                                          src="/external/outerrectanglei133-9xgq-200h.png"
                                          className="edit-terms-viewattachments-outer-rectangle1"
                                        />
                                      </div>
                                      <div className="edit-terms-viewattachments-text-icon1">
                                        <span className="edit-terms-viewattachments-text138 Paragraph-CaptionSmal">
                                          Items
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator10">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle10"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame1000007499">
                                  <div className="edit-terms-viewattachments-leading1">
                                    <div className="edit-terms-viewattachments-container19">
                                      <div className="edit-terms-viewattachments-content15">
                                        <div className="edit-terms-viewattachments-control1">
                                          <div className="edit-terms-viewattachments-form-control1">
                                            <img
                                              alt="OuterRectangleI133"
                                              src="/external/outerrectanglei133-x9eo-200h.png"
                                              className="edit-terms-viewattachments-outer-rectangle2"
                                            />
                                          </div>
                                        </div>
                                        <div className="edit-terms-viewattachments-leadingmedia2">
                                          <div className="edit-terms-viewattachments-miscicon1"></div>
                                        </div>
                                        <div className="edit-terms-viewattachments-text139">
                                          <span className="edit-terms-viewattachments-text140 ParagraphSmallMedium">
                                            Oxygen concentrator
                                          </span>
                                          <span className="edit-terms-viewattachments-text141 ParagraphSmallRegular1">
                                            #28373
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator11">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle11"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-leading2">
                                    <div className="edit-terms-viewattachments-container20">
                                      <div className="edit-terms-viewattachments-content16">
                                        <div className="edit-terms-viewattachments-control2">
                                          <div className="edit-terms-viewattachments-form-control2">
                                            <img
                                              alt="OuterRectangleI133"
                                              src="/external/outerrectanglei133-q6kp-200h.png"
                                              className="edit-terms-viewattachments-outer-rectangle3"
                                            />
                                          </div>
                                        </div>
                                        <div className="edit-terms-viewattachments-leadingmedia3">
                                          <div className="edit-terms-viewattachments-miscicon2"></div>
                                        </div>
                                        <div className="edit-terms-viewattachments-text142">
                                          <span className="edit-terms-viewattachments-text143 ParagraphSmallMedium">
                                            Mechanical ventilator
                                          </span>
                                          <span className="edit-terms-viewattachments-text144 ParagraphSmallRegular1">
                                            #28373
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator12">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle12"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-leading3">
                                    <div className="edit-terms-viewattachments-container21">
                                      <div className="edit-terms-viewattachments-content17">
                                        <div className="edit-terms-viewattachments-control3">
                                          <div className="edit-terms-viewattachments-form-control3">
                                            <img
                                              alt="OuterRectangleI133"
                                              src="/external/outerrectanglei133-ta0k-200h.png"
                                              className="edit-terms-viewattachments-outer-rectangle4"
                                            />
                                          </div>
                                        </div>
                                        <div className="edit-terms-viewattachments-leadingmedia4">
                                          <div className="edit-terms-viewattachments-miscicon3"></div>
                                        </div>
                                        <div className="edit-terms-viewattachments-text145">
                                          <span className="edit-terms-viewattachments-text146 ParagraphSmallMedium">
                                            Patient Monitor
                                          </span>
                                          <span className="edit-terms-viewattachments-text147 ParagraphSmallRegular1">
                                            #28373
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator13">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle13"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-leading4">
                                    <div className="edit-terms-viewattachments-container22">
                                      <div className="edit-terms-viewattachments-content18">
                                        <div className="edit-terms-viewattachments-control4">
                                          <div className="edit-terms-viewattachments-form-control4">
                                            <img
                                              alt="OuterRectangleI133"
                                              src="/external/outerrectanglei133-ww4h-200h.png"
                                              className="edit-terms-viewattachments-outer-rectangle5"
                                            />
                                          </div>
                                        </div>
                                        <div className="edit-terms-viewattachments-leadingmedia5">
                                          <div className="edit-terms-viewattachments-miscicon4"></div>
                                        </div>
                                        <div className="edit-terms-viewattachments-text148">
                                          <span className="edit-terms-viewattachments-text149 ParagraphSmallMedium">
                                            Mechanical ventilator
                                          </span>
                                          <span className="edit-terms-viewattachments-text150 ParagraphSmallRegular1">
                                            #28373
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator14">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle14"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="edit-terms-viewattachments-frame1000007521">
                                <div className="edit-terms-viewattachments-header3">
                                  <div className="edit-terms-viewattachments-table-master-header2">
                                    <div className="edit-terms-viewattachments-container23">
                                      <div className="edit-terms-viewattachments-text-icon2">
                                        <span className="edit-terms-viewattachments-text151 Paragraph-CaptionSmal">
                                          Variants
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator15">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle15"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame10000075031">
                                  <div className="edit-terms-viewattachments-content19">
                                    <div className="edit-terms-viewattachments-container24">
                                      <div className="edit-terms-viewattachments-content20">
                                        <div className="edit-terms-viewattachments-avatar-text10">
                                          <div className="edit-terms-viewattachments-text152">
                                            <span className="edit-terms-viewattachments-text153 ParagraphSmallRegular1">
                                              Blue
                                              <span
                                                dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                                }}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator16">
                                      <img
                                        alt="RectangleI133"
                                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                                        className="edit-terms-viewattachments-rectangle16"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content21">
                                    <div className="edit-terms-viewattachments-container25">
                                      <div className="edit-terms-viewattachments-content22">
                                        <div className="edit-terms-viewattachments-avatar-text11">
                                          <div className="edit-terms-viewattachments-text154">
                                            <span className="edit-terms-viewattachments-text155 ParagraphSmallRegular1">
                                              NIL
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator17">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-srvo-200h.png"
                                        className="edit-terms-viewattachments-rectangle17"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content23">
                                    <div className="edit-terms-viewattachments-container26">
                                      <div className="edit-terms-viewattachments-content24">
                                        <div className="edit-terms-viewattachments-avatar-text12">
                                          <div className="edit-terms-viewattachments-text156">
                                            <span className="edit-terms-viewattachments-text157 ParagraphSmallRegular1">
                                              Blue
                                              <span
                                                dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                                }}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator18">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-z42p-200h.png"
                                        className="edit-terms-viewattachments-rectangle18"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content25">
                                    <div className="edit-terms-viewattachments-container27">
                                      <div className="edit-terms-viewattachments-content26">
                                        <div className="edit-terms-viewattachments-avatar-text13">
                                          <div className="edit-terms-viewattachments-text158">
                                            <span className="edit-terms-viewattachments-text159 ParagraphSmallRegular1">
                                              Blue
                                              <span
                                                dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                                }}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator19">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-jcl2-200h.png"
                                        className="edit-terms-viewattachments-rectangle19"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="edit-terms-viewattachments-frame1000007517">
                                <div className="edit-terms-viewattachments-header4">
                                  <div className="edit-terms-viewattachments-table-master-header3">
                                    <div className="edit-terms-viewattachments-container28">
                                      <div className="edit-terms-viewattachments-text-icon3">
                                        <span className="edit-terms-viewattachments-text160 Paragraph-CaptionSmal">
                                          Quantity
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator20">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-2v2m-200h.png"
                                        className="edit-terms-viewattachments-rectangle20"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame10000075032">
                                  <div className="edit-terms-viewattachments-content27">
                                    <div className="edit-terms-viewattachments-container29">
                                      <div className="edit-terms-viewattachments-content28">
                                        <div className="edit-terms-viewattachments-avatar-text14">
                                          <div className="edit-terms-viewattachments-text161">
                                            <span className="edit-terms-viewattachments-text162 ParagraphSmallRegular1">
                                              100 pieces
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator21">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-mhmm-200h.png"
                                        className="edit-terms-viewattachments-rectangle21"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content29">
                                    <div className="edit-terms-viewattachments-container30">
                                      <div className="edit-terms-viewattachments-content30">
                                        <div className="edit-terms-viewattachments-avatar-text15">
                                          <div className="edit-terms-viewattachments-text163">
                                            <span className="edit-terms-viewattachments-text164 ParagraphSmallRegular1">
                                              45 Kg
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator22">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-mb1d-200h.png"
                                        className="edit-terms-viewattachments-rectangle22"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content31">
                                    <div className="edit-terms-viewattachments-container31">
                                      <div className="edit-terms-viewattachments-content32">
                                        <div className="edit-terms-viewattachments-avatar-text16">
                                          <div className="edit-terms-viewattachments-text165">
                                            <span className="edit-terms-viewattachments-text166 ParagraphSmallRegular1">
                                              30 Units
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator23">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-itc-200h.png"
                                        className="edit-terms-viewattachments-rectangle23"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content33">
                                    <div className="edit-terms-viewattachments-container32">
                                      <div className="edit-terms-viewattachments-content34">
                                        <div className="edit-terms-viewattachments-avatar-text17">
                                          <div className="edit-terms-viewattachments-text167">
                                            <span className="edit-terms-viewattachments-text168 ParagraphSmallRegular1">
                                              35 Units
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator24"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="edit-terms-viewattachments-frame1000007510">
                                <div className="edit-terms-viewattachments-header5">
                                  <div className="edit-terms-viewattachments-table-master-header4">
                                    <div className="edit-terms-viewattachments-container33">
                                      <div className="edit-terms-viewattachments-text-icon4">
                                        <span className="edit-terms-viewattachments-text169 Paragraph-CaptionSmal">
                                          Price
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator25">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-udbj-200h.png"
                                        className="edit-terms-viewattachments-rectangle24"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame10000075033">
                                  <div className="edit-terms-viewattachments-content35">
                                    <div className="edit-terms-viewattachments-container34">
                                      <div className="edit-terms-viewattachments-content36">
                                        <div className="edit-terms-viewattachments-avatar-text18">
                                          <div className="edit-terms-viewattachments-text170">
                                            <span className="edit-terms-viewattachments-text171 ParagraphSmallRegular1">
                                              $200.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator26">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-h4so-200h.png"
                                        className="edit-terms-viewattachments-rectangle25"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content37">
                                    <div className="edit-terms-viewattachments-container35">
                                      <div className="edit-terms-viewattachments-content38">
                                        <div className="edit-terms-viewattachments-avatar-text19">
                                          <div className="edit-terms-viewattachments-text172">
                                            <span className="edit-terms-viewattachments-text173 ParagraphSmallRegular1">
                                              $350.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator27">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-2xwv-200h.png"
                                        className="edit-terms-viewattachments-rectangle26"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content39">
                                    <div className="edit-terms-viewattachments-container36">
                                      <div className="edit-terms-viewattachments-content40">
                                        <div className="edit-terms-viewattachments-avatar-text20">
                                          <div className="edit-terms-viewattachments-text174">
                                            <span className="edit-terms-viewattachments-text175 ParagraphSmallRegular1">
                                              $300.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator28">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-805j-200h.png"
                                        className="edit-terms-viewattachments-rectangle27"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content41">
                                    <div className="edit-terms-viewattachments-container37">
                                      <div className="edit-terms-viewattachments-content42">
                                        <div className="edit-terms-viewattachments-avatar-text21">
                                          <div className="edit-terms-viewattachments-text176">
                                            <span className="edit-terms-viewattachments-text177 ParagraphSmallRegular1">
                                              $200.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator29"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="edit-terms-viewattachments-frame1000007515">
                                <div className="edit-terms-viewattachments-header6">
                                  <div className="edit-terms-viewattachments-table-master-header5">
                                    <div className="edit-terms-viewattachments-container38">
                                      <div className="edit-terms-viewattachments-text-icon5">
                                        <span className="edit-terms-viewattachments-text178 Paragraph-CaptionSmal">
                                          Amount
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator30">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-z8mq-200h.png"
                                        className="edit-terms-viewattachments-rectangle28"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame10000075034">
                                  <div className="edit-terms-viewattachments-content43">
                                    <div className="edit-terms-viewattachments-container39">
                                      <div className="edit-terms-viewattachments-content44">
                                        <div className="edit-terms-viewattachments-avatar-text22">
                                          <div className="edit-terms-viewattachments-text179">
                                            <span className="edit-terms-viewattachments-text180 ParagraphSmallRegular1">
                                              $2,000.0
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator31">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-3w4-200h.png"
                                        className="edit-terms-viewattachments-rectangle29"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content45">
                                    <div className="edit-terms-viewattachments-container40">
                                      <div className="edit-terms-viewattachments-content46">
                                        <div className="edit-terms-viewattachments-avatar-text23">
                                          <div className="edit-terms-viewattachments-text181">
                                            <span className="edit-terms-viewattachments-text182 ParagraphSmallRegular1">
                                              $2,500.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator32">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-k78i-200h.png"
                                        className="edit-terms-viewattachments-rectangle30"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content47">
                                    <div className="edit-terms-viewattachments-container41">
                                      <div className="edit-terms-viewattachments-content48">
                                        <div className="edit-terms-viewattachments-avatar-text24">
                                          <div className="edit-terms-viewattachments-text183">
                                            <span className="edit-terms-viewattachments-text184 ParagraphSmallRegular1">
                                              $1,500.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator33">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-7yo6-200h.png"
                                        className="edit-terms-viewattachments-rectangle31"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content49">
                                    <div className="edit-terms-viewattachments-container42">
                                      <div className="edit-terms-viewattachments-content50">
                                        <div className="edit-terms-viewattachments-avatar-text25">
                                          <div className="edit-terms-viewattachments-text185">
                                            <span className="edit-terms-viewattachments-text186 ParagraphSmallRegular1">
                                              $1,500.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator34">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-vlvx-200h.png"
                                        className="edit-terms-viewattachments-rectangle32"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="edit-terms-viewattachments-frame1000007520">
                                <div className="edit-terms-viewattachments-header7">
                                  <div className="edit-terms-viewattachments-table-master-header6">
                                    <div className="edit-terms-viewattachments-container43">
                                      <div className="edit-terms-viewattachments-text-icon6">
                                        <span className="edit-terms-viewattachments-text187 Paragraph-CaptionSmal">
                                          Expected Delivery Date
                                        </span>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator35">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-jxae-200h.png"
                                        className="edit-terms-viewattachments-rectangle33"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-terms-viewattachments-frame10000075035">
                                  <div className="edit-terms-viewattachments-content51">
                                    <div className="edit-terms-viewattachments-container44">
                                      <div className="edit-terms-viewattachments-content52">
                                        <div className="edit-terms-viewattachments-avatar-text26">
                                          <div className="edit-terms-viewattachments-text188">
                                            <span className="edit-terms-viewattachments-text189 ParagraphSmallRegular1">
                                              2024-08-07
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator36">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-4m5o-200h.png"
                                        className="edit-terms-viewattachments-rectangle34"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content53">
                                    <div className="edit-terms-viewattachments-container45">
                                      <div className="edit-terms-viewattachments-content54">
                                        <div className="edit-terms-viewattachments-avatar-text27">
                                          <div className="edit-terms-viewattachments-text190">
                                            <span className="edit-terms-viewattachments-text191 ParagraphSmallRegular1">
                                              2024-08-07
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator37">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-iovr-200h.png"
                                        className="edit-terms-viewattachments-rectangle35"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content55">
                                    <div className="edit-terms-viewattachments-container46">
                                      <div className="edit-terms-viewattachments-content56">
                                        <div className="edit-terms-viewattachments-avatar-text28">
                                          <div className="edit-terms-viewattachments-text192">
                                            <span className="edit-terms-viewattachments-text193 ParagraphSmallRegular1">
                                              2024-08-07
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator38">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-jqf4-200h.png"
                                        className="edit-terms-viewattachments-rectangle36"
                                      />
                                    </div>
                                  </div>
                                  <div className="edit-terms-viewattachments-content57">
                                    <div className="edit-terms-viewattachments-container47">
                                      <div className="edit-terms-viewattachments-content58">
                                        <div className="edit-terms-viewattachments-avatar-text29">
                                          <div className="edit-terms-viewattachments-text194">
                                            <span className="edit-terms-viewattachments-text195 ParagraphSmallRegular1">
                                              2024-08-07
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-terms-viewattachments-separator39">
                                      <img
                                        alt="RectangleI133"
                                        src="/external/rectanglei133-dqoc-200h.png"
                                        className="edit-terms-viewattachments-rectangle37"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="edit-terms-viewattachments-frame1618868866">
                              <div className="edit-terms-viewattachments-frame1618868188">
                                <span className="edit-terms-viewattachments-text196 ParagraphMediumRegular">
                                  Sub Total
                                </span>
                                <span className="edit-terms-viewattachments-text197 ParagraphMediumRegular">
                                  $8,000.00
                                </span>
                              </div>
                              <div className="edit-terms-viewattachments-frame16188681892">
                                <span className="edit-terms-viewattachments-text198 ParagraphMediumRegular">
                                  Total
                                </span>
                                <span className="edit-terms-viewattachments-text199 Paragraph-MediumBold">
                                  $8,750.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-terms-viewattachments-terms">
                        <div className="edit-terms-viewattachments-frame1618868193">
                          <div className="edit-terms-viewattachments-frame1618868720">
                            <img
                              alt="iconsigndocI133"
                              src="/external/iconsigndoci119-ucw.svg"
                              className="edit-terms-viewattachments-iconsigndoc2"
                            />
                            <div className="edit-terms-viewattachments-frame16188687191">
                              <div className="edit-terms-viewattachments-frame16188687192">
                                <span className="edit-terms-viewattachments-text200 HeadingH6Semibold">
                                  Terms and Attachments
                                </span>
                                <span className="edit-terms-viewattachments-text201 ParagraphSmallRegular1">
                                  Review payment and delivery terms
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="edit-terms-viewattachments-frame1618868690">
                            <img
                              alt="iconchevrondownI133"
                              src="/external/iconchevrondowni119-vsrn.svg"
                              className="edit-terms-viewattachments-iconchevrondown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="edit-terms-viewattachments-frame1618868409">
                      <button className="edit-terms-viewattachments-buttongreys">
                        <div className="edit-terms-viewattachments-container48">
                          <span className="edit-terms-viewattachments-text202 ParagraphMediumSemibold">
                            Cancel
                          </span>
                        </div>
                      </button>
                      <button className="edit-terms-viewattachments-buttonsecondary">
                        <div className="edit-terms-viewattachments-container49">
                          <span className="edit-terms-viewattachments-text203 ParagraphMediumBold">
                            Save as draft
                          </span>
                        </div>
                      </button>
                      <button className="edit-terms-viewattachments-buttonprimary">
                        <div className="edit-terms-viewattachments-container50">
                          <span className="edit-terms-viewattachments-text204 ParagraphMediumBold">
                            <button onClick={handleSubmit} className="view-pending-respond-button">
                              Submit
                            </button>
                            
                         </span>

                
                        </div>

                      </button>
                
                    </div>
                    {showAlert && (
                <Suspense fallback={<div>Loading...</div>}>
                  <Alert onClose={handleCloseAlert} />
                </Suspense>
              )}
              {showAlert1 && (
                <Suspense fallback={<div>Loading...</div>}>
                  <Alert1 onConfirm={handleConfirm} onCancel={() => setShowAlert1(false)} />
                </Suspense>
              )}
              {isLoading && (
                <Suspense fallback={<div>Loading...</div>}>
                  <Frame1618868946 />
                </Suspense>
              )}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Layout>
  )
}

export default EditTermsViewattachments
