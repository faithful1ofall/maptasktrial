import React, { useState, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'
import './view-pending.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Alert1 = lazy(() => import('./alert1'))
const Alert = lazy(() => import('./alert'))
const Frame1618868946 = lazy(() => import('./frame1618868946'))

const ViewPending = (props) => {
  const [showAlert1, setShowAlert1] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory();

  const handleRespond = () => {
    history.push('/edititeminfo');
  //  setShowAlert1(true)
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
    <div className="view-pending-container10">
      <Helmet>
        <title>waiting response</title>
      </Helmet>
      <div className="view-pending-view-pending">
        <Sidebar />
        
        <div className="view-pending-frame1618868177">
          <Header />
          
          <div className="view-pending-frame1618868179">

            <div className="view-pending-frame10000075171">
             

              <div className="view-pending-frame1000007467">
             

                <span className="view-pending-text117 HeadingH5Semibold">
                  Quote details
                </span>
                <span className="view-pending-text118 ParagraphSmallRegular1">
                  Created on Wed, 12th June 2022, 08:00am
                </span>
              </div>
              <div className="view-pending-frame10000074981">
                <div className="view-pending-frame10000074982">
                  <button className="view-pending-buttonprimary1">
                    <div className="view-pending-container17">
                      <span className="view-pending-text119 ParagraphSmallBold">
                        <button onClick={handleRespond} className="view-pending-respond-button">
                          Respond
                        </button>
                      </span>
                    </div>
                  </button>
                  <button className="view-pending-buttonprimary2">
                    <div className="view-pending-container18">
                      <img
                        alt="iconmultiplyI119"
                        src="/external/iconmultiplyi119-baf.svg"
                        className="view-pending-iconmultiply"
                      />
                      <span className="view-pending-text120 ParagraphSmallBold">
                        Reject
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="view-pending-frame1618868722">
              <div className="view-pending-frame1618868783">
                <div className="view-pending-items">
                  <div className="view-pending-frame1618868808">
                    <div className="view-pending-frame427320328">
                      <div className="view-pending-frame427320351">
                        <span className="view-pending-text121 HeadingH6Semibold">
                          Quote Information
                        </span>
                      </div>
                    </div>
                    <span className="view-pending-text122 ParagraphSmallRegular1">
                      Expected delivery date : 2024-12-02
                    </span>
                  </div>
                  <div className="view-pending-frame1618868936">
                    <div className="view-pending-wrapper">
                      <div className="view-pending-frame427320327">
                        <div className="view-pending-frame427320552">
                          <div className="view-pending-frame427320551">
                            <div className="view-pending-frame4273205611">
                              <span className="view-pending-text123 Paragraph-MediumMedium">
                                Title
                              </span>
                              <span className="view-pending-text124 Paragraph-MediumMedium">
                                Request for Equipments
                              </span>
                            </div>
                          </div>
                          <div className="view-pending-frame4273205612">
                            <span className="view-pending-text125 Paragraph-MediumMedium">
                              RFQ No
                            </span>
                            <span className="view-pending-text126 Paragraph-MediumMedium">
                              RQ #01234
                            </span>
                          </div>
                          <div className="view-pending-frame4273205631">
                            <div className="view-pending-frame4273205632">
                              <span className="view-pending-text127 Paragraph-MediumMedium">
                                Requestor
                              </span>
                              <div className="view-pending-frame1618868415">
                                <div className="view-pending-leadingmedia1">
                                  <div className="view-pending-avatars3">
                                    <img
                                      alt="ImageI119"
                                      src="/external/imagei119-j789-200h.png"
                                      className="view-pending-image3"
                                    />
                                    <span className="view-pending-text128 ParagraphSmallSemibold">
                                      JD
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-frame1618868414">
                                  <span className="view-pending-text129 Paragraph-MediumMedium">
                                    Jane Doe
                                  </span>
                                  <img
                                    alt="Ellipse12921194"
                                    src="/external/ellipse12921194-hhjs-200h.png"
                                    className="view-pending-ellipse1292"
                                  />
                                  <span className="view-pending-text130">
                                    Head Nurse, Paediatrics
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame4273205621">
                            <div className="view-pending-frame4273205622">
                              <span className="view-pending-text131 Paragraph-MediumMedium">
                                Status
                              </span>
                              <div className="view-pending-frame1618868784">
                                <div className="view-pending-badge3">
                                  <div className="view-pending-container19">
                                    <span className="view-pending-text132 ParagraphXSmallMedium1">
                                      Awaiting
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame427320565">
                            <div className="view-pending-frame4273205613">
                              <span className="view-pending-text133 Paragraph-MediumMedium">
                                Department
                              </span>
                              <span className="view-pending-text134 Paragraph-MediumMedium">
                                Maternity
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="view-pending-dashboard-summary-card">
                      <div className="view-pending-frame1618868253">
                        <img
                          alt="iconbuilding51194"
                          src="/external/iconbuilding51194-0vo.svg"
                          className="view-pending-iconbuilding5"
                        />
                        <span className="view-pending-text135 ParagraphXSmallRegular">
                          Client
                        </span>
                      </div>
                      <div className="view-pending-content13">
                        <div className="view-pending-avatars4">
                          <img
                            alt="ImageI119"
                            src="/external/Image-w.png"
                            className="view-pending-image4"
                          />
                          <span className="view-pending-text128 ParagraphSmallSemibold">
                                      W
                                    </span>
                        </div>
                        <div className="view-pending-text136">
                          <span className="view-pending-text137 ParagraphSmallMedium">
                            Westend Hospital
                          </span>
                          <span className="view-pending-text138 ParagraphXSmallRegular">
                            Clear street
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-pending-frame1618868910">
                  <div className="view-pending-frame1618868181">
                    <div className="view-pending-frame1618868753">
                      <div className="view-pending-frame1618868752">
                        <div className="view-pending-frame1618868751">
                          <span className="view-pending-text139 HeadingH6Semibold">
                            Item(s)
                          </span>
                        </div>
                      </div>
                      <div className="view-pending-frame1618868187">
                        <div className="view-pending-frame10000075061">
                          <div className="view-pending-frame10000075062">
                            <div className="view-pending-frame1000007522">
                              <div className="view-pending-header11">
                                <div className="view-pending-table-master-header10">
                                  <div className="view-pending-container20">
                                    <div className="view-pending-form-control-element">
                                      <img
                                        alt="OuterRectangleI119"
                                        src="/external/outerrectanglei119-adlm-200h.png"
                                        className="view-pending-outer-rectangle1"
                                      />
                                    </div>
                                    <div className="view-pending-text-icon10">
                                      <span className="view-pending-text140 Paragraph-CaptionSmal">
                                        Items
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator10">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-te56-200h.png"
                                      className="view-pending-rectangle10"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame1000007499">
                                <div className="view-pending-leading1">
                                  <div className="view-pending-container21">
                                    <div className="view-pending-content14">
                                      <div className="view-pending-control1">
                                        <div className="view-pending-form-control1">
                                          <img
                                            alt="OuterRectangleI119"
                                            src="/external/outerrectanglei119-c6v9-200h.png"
                                            className="view-pending-outer-rectangle2"
                                          />
                                        </div>
                                      </div>
                                      <div className="view-pending-leadingmedia2">
                                        <div className="view-pending-miscicon1"></div>
                                      </div>
                                      <div className="view-pending-text141">
                                        <span className="view-pending-text142 ParagraphSmallMedium">
                                          Oxygen concentrator
                                        </span>
                                        <span className="view-pending-text143 ParagraphSmallRegular1">
                                          #28373
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator11">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-5l64-200h.png"
                                      className="view-pending-rectangle11"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-leading2">
                                  <div className="view-pending-container22">
                                    <div className="view-pending-content15">
                                      <div className="view-pending-control2">
                                        <div className="view-pending-form-control2">
                                          <img
                                            alt="OuterRectangleI119"
                                            src="/external/outerrectanglei119-dkh-200h.png"
                                            className="view-pending-outer-rectangle3"
                                          />
                                        </div>
                                      </div>
                                      <div className="view-pending-leadingmedia3">
                                        <div className="view-pending-miscicon2"></div>
                                      </div>
                                      <div className="view-pending-text144">
                                        <span className="view-pending-text145 ParagraphSmallMedium">
                                          Mechanical ventilator
                                        </span>
                                        <span className="view-pending-text146 ParagraphSmallRegular1">
                                          #28373
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator12">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-2lu-200h.png"
                                      className="view-pending-rectangle12"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-leading3">
                                  <div className="view-pending-container23">
                                    <div className="view-pending-content16">
                                      <div className="view-pending-control3">
                                        <div className="view-pending-form-control3">
                                          <img
                                            alt="OuterRectangleI119"
                                            src="/external/outerrectanglei119-gbf-200h.png"
                                            className="view-pending-outer-rectangle4"
                                          />
                                        </div>
                                      </div>
                                      <div className="view-pending-leadingmedia4">
                                        <div className="view-pending-miscicon3"></div>
                                      </div>
                                      <div className="view-pending-text147">
                                        <span className="view-pending-text148 ParagraphSmallMedium">
                                          Patient Monitor
                                        </span>
                                        <span className="view-pending-text149 ParagraphSmallRegular1">
                                          #28373
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator13">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-pit-200h.png"
                                      className="view-pending-rectangle13"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-leading4">
                                  <div className="view-pending-container24">
                                    <div className="view-pending-content17">
                                      <div className="view-pending-control4">
                                        <div className="view-pending-form-control4">
                                          <img
                                            alt="OuterRectangleI119"
                                            src="/external/outerrectanglei119-2w-200h.png"
                                            className="view-pending-outer-rectangle5"
                                          />
                                        </div>
                                      </div>
                                      <div className="view-pending-leadingmedia5">
                                        <div className="view-pending-miscicon4"></div>
                                      </div>
                                      <div className="view-pending-text150">
                                        <span className="view-pending-text151 ParagraphSmallMedium">
                                          Mechanical ventilator
                                        </span>
                                        <span className="view-pending-text152 ParagraphSmallRegular1">
                                          #28373
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator14">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-41d-200h.png"
                                      className="view-pending-rectangle14"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame10000075211">
                              <div className="view-pending-header12">
                                <div className="view-pending-table-master-header11">
                                  <div className="view-pending-container25">
                                    <div className="view-pending-text-icon11">
                                      <span className="view-pending-text153 Paragraph-CaptionSmal">
                                        Variants
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator15">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-o33l-200h.png"
                                      className="view-pending-rectangle15"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame100000750310">
                                <div className="view-pending-content18">
                                  <div className="view-pending-container26">
                                    <div className="view-pending-content19">
                                      <div className="view-pending-avatar-text10">
                                        <div className="view-pending-text154">
                                          <span className="view-pending-text155 ParagraphSmallRegular1">
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
                                  <div className="view-pending-separator16">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-mty-200h.png"
                                      className="view-pending-rectangle16"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content20">
                                  <div className="view-pending-container27">
                                    <div className="view-pending-content21">
                                      <div className="view-pending-avatar-text11">
                                        <div className="view-pending-text156">
                                          <span className="view-pending-text157 ParagraphSmallRegular1">
                                            NIL
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator17">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-rj8u-200h.png"
                                      className="view-pending-rectangle17"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content22">
                                  <div className="view-pending-container28">
                                    <div className="view-pending-content23">
                                      <div className="view-pending-avatar-text12">
                                        <div className="view-pending-text158">
                                          <span className="view-pending-text159 ParagraphSmallRegular1">
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
                                  <div className="view-pending-separator18">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-0iv-200h.png"
                                      className="view-pending-rectangle18"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content24">
                                  <div className="view-pending-container29">
                                    <div className="view-pending-content25">
                                      <div className="view-pending-avatar-text13">
                                        <div className="view-pending-text160">
                                          <span className="view-pending-text161 ParagraphSmallRegular1">
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
                                  <div className="view-pending-separator19">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-a8tp-200h.png"
                                      className="view-pending-rectangle19"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame10000075172">
                              <div className="view-pending-header13">
                                <div className="view-pending-table-master-header12">
                                  <div className="view-pending-container30">
                                    <div className="view-pending-text-icon12">
                                      <span className="view-pending-text162 Paragraph-CaptionSmal">
                                        Quantity
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator20">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-6s9-200h.png"
                                      className="view-pending-rectangle20"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame100000750311">
                                <div className="view-pending-content26">
                                  <div className="view-pending-container31">
                                    <div className="view-pending-content27">
                                      <div className="view-pending-avatar-text14">
                                        <div className="view-pending-text163">
                                          <span className="view-pending-text164 ParagraphSmallRegular1">
                                            100 pieces
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator21">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-ftav-200h.png"
                                      className="view-pending-rectangle21"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content28">
                                  <div className="view-pending-container32">
                                    <div className="view-pending-content29">
                                      <div className="view-pending-avatar-text15">
                                        <div className="view-pending-text165">
                                          <span className="view-pending-text166 ParagraphSmallRegular1">
                                            45 Kg
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator22">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-trof-200h.png"
                                      className="view-pending-rectangle22"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content30">
                                  <div className="view-pending-container33">
                                    <div className="view-pending-content31">
                                      <div className="view-pending-avatar-text16">
                                        <div className="view-pending-text167">
                                          <span className="view-pending-text168 ParagraphSmallRegular1">
                                            30 Units
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator23">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-x7jk-200h.png"
                                      className="view-pending-rectangle23"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content32">
                                  <div className="view-pending-container34">
                                    <div className="view-pending-content33">
                                      <div className="view-pending-avatar-text17">
                                        <div className="view-pending-text169">
                                          <span className="view-pending-text170 ParagraphSmallRegular1">
                                            35 Units
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator24"></div>
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame10000075101">
                              <div className="view-pending-header14">
                                <div className="view-pending-table-master-header13">
                                  <div className="view-pending-container35">
                                    <div className="view-pending-text-icon13">
                                      <span className="view-pending-text171 Paragraph-CaptionSmal">
                                        Price
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator25">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-net-200h.png"
                                      className="view-pending-rectangle24"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame100000750312">
                                <div className="view-pending-content34">
                                  <div className="view-pending-container36">
                                    <div className="view-pending-content35">
                                      <div className="view-pending-avatar-text18">
                                        <div className="view-pending-text172">
                                          <span className="view-pending-text173 ParagraphSmallRegular1">
                                            $200.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator26">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-8q7m-200h.png"
                                      className="view-pending-rectangle25"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content36">
                                  <div className="view-pending-container37">
                                    <div className="view-pending-content37">
                                      <div className="view-pending-avatar-text19">
                                        <div className="view-pending-text174">
                                          <span className="view-pending-text175 ParagraphSmallRegular1">
                                            $350.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator27">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-rjm-200h.png"
                                      className="view-pending-rectangle26"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content38">
                                  <div className="view-pending-container38">
                                    <div className="view-pending-content39">
                                      <div className="view-pending-avatar-text20">
                                        <div className="view-pending-text176">
                                          <span className="view-pending-text177 ParagraphSmallRegular1">
                                            $300.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator28">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-lhjn-200h.png"
                                      className="view-pending-rectangle27"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content40">
                                  <div className="view-pending-container39">
                                    <div className="view-pending-content41">
                                      <div className="view-pending-avatar-text21">
                                        <div className="view-pending-text178">
                                          <span className="view-pending-text179 ParagraphSmallRegular1">
                                            $200.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator29"></div>
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame10000075151">
                              <div className="view-pending-header15">
                                <div className="view-pending-table-master-header14">
                                  <div className="view-pending-container40">
                                    <div className="view-pending-text-icon14">
                                      <span className="view-pending-text180 Paragraph-CaptionSmal">
                                        Amount
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator30">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-jvot-200h.png"
                                      className="view-pending-rectangle28"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame100000750313">
                                <div className="view-pending-content42">
                                  <div className="view-pending-container41">
                                    <div className="view-pending-content43">
                                      <div className="view-pending-avatar-text22">
                                        <div className="view-pending-text181">
                                          <span className="view-pending-text182 ParagraphSmallRegular1">
                                            $2,000.0
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator31">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-v3wh-200h.png"
                                      className="view-pending-rectangle29"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content44">
                                  <div className="view-pending-container42">
                                    <div className="view-pending-content45">
                                      <div className="view-pending-avatar-text23">
                                        <div className="view-pending-text183">
                                          <span className="view-pending-text184 ParagraphSmallRegular1">
                                            $2,500.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator32">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-vm2-200h.png"
                                      className="view-pending-rectangle30"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content46">
                                  <div className="view-pending-container43">
                                    <div className="view-pending-content47">
                                      <div className="view-pending-avatar-text24">
                                        <div className="view-pending-text185">
                                          <span className="view-pending-text186 ParagraphSmallRegular1">
                                            $1,500.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator33">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-cm8-200h.png"
                                      className="view-pending-rectangle31"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content48">
                                  <div className="view-pending-container44">
                                    <div className="view-pending-content49">
                                      <div className="view-pending-avatar-text25">
                                        <div className="view-pending-text187">
                                          <span className="view-pending-text188 ParagraphSmallRegular1">
                                            $1,500.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator34">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-iz2e-200h.png"
                                      className="view-pending-rectangle32"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame10000075201">
                              <div className="view-pending-header16">
                                <div className="view-pending-table-master-header15">
                                  <div className="view-pending-container45">
                                    <div className="view-pending-text-icon15">
                                      <span className="view-pending-text189 Paragraph-CaptionSmal">
                                        Expected Delivery Date
                                      </span>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator35">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-55v4-200h.png"
                                      className="view-pending-rectangle33"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="view-pending-frame100000750314">
                                <div className="view-pending-content50">
                                  <div className="view-pending-container46">
                                    <div className="view-pending-content51">
                                      <div className="view-pending-avatar-text26">
                                        <div className="view-pending-text190">
                                          <span className="view-pending-text191 ParagraphSmallRegular1">
                                            2024-08-07
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator36">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-8ac-200h.png"
                                      className="view-pending-rectangle34"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content52">
                                  <div className="view-pending-container47">
                                    <div className="view-pending-content53">
                                      <div className="view-pending-avatar-text27">
                                        <div className="view-pending-text192">
                                          <span className="view-pending-text193 ParagraphSmallRegular1">
                                            2024-08-07
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator37">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-8rw-200h.png"
                                      className="view-pending-rectangle35"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content54">
                                  <div className="view-pending-container48">
                                    <div className="view-pending-content55">
                                      <div className="view-pending-avatar-text28">
                                        <div className="view-pending-text194">
                                          <span className="view-pending-text195 ParagraphSmallRegular1">
                                            2024-08-07
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator38">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-6cj-200h.png"
                                      className="view-pending-rectangle36"
                                    />
                                  </div>
                                </div>
                                <div className="view-pending-content56">
                                  <div className="view-pending-container49">
                                    <div className="view-pending-content57">
                                      <div className="view-pending-avatar-text29">
                                        <div className="view-pending-text196">
                                          <span className="view-pending-text197 ParagraphSmallRegular1">
                                            2024-08-07
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="view-pending-separator39">
                                    <img
                                      alt="RectangleI119"
                                      src="/external/rectanglei119-ii1-200h.png"
                                      className="view-pending-rectangle37"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame10000075212">
                            <div className="view-pending-header17">
                              <div className="view-pending-table-master-header16">
                                <div className="view-pending-container50">
                                  <div className="view-pending-text-icon16">
                                    <span className="view-pending-text198 Paragraph-CaptionSmal">
                                      Variants
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-separator40">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-129n-200h.png"
                                    className="view-pending-rectangle38"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame100000750315">
                              <div className="view-pending-content58">
                                <div className="view-pending-container51">
                                  <div className="view-pending-content59">
                                    <div className="view-pending-avatar-text30">
                                      <div className="view-pending-text199">
                                        <span className="view-pending-text200 ParagraphSmallRegular1">
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
                                <div className="view-pending-separator41">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-sswj-200h.png"
                                    className="view-pending-rectangle39"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content60">
                                <div className="view-pending-container52">
                                  <div className="view-pending-content61">
                                    <div className="view-pending-avatar-text31">
                                      <div className="view-pending-text201">
                                        <span className="view-pending-text202 ParagraphSmallRegular1">
                                          NIL
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator42">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-00k7-200h.png"
                                    className="view-pending-rectangle40"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content62">
                                <div className="view-pending-container53">
                                  <div className="view-pending-content63">
                                    <div className="view-pending-avatar-text32">
                                      <div className="view-pending-text203">
                                        <span className="view-pending-text204 ParagraphSmallRegular1">
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
                                <div className="view-pending-separator43">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-vgts-200h.png"
                                    className="view-pending-rectangle41"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content64">
                                <div className="view-pending-container54">
                                  <div className="view-pending-content65">
                                    <div className="view-pending-avatar-text33">
                                      <div className="view-pending-text205">
                                        <span className="view-pending-text206 ParagraphSmallRegular1">
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
                                <div className="view-pending-separator44">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-o9ls-200h.png"
                                    className="view-pending-rectangle42"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame10000075173">
                            <div className="view-pending-header18">
                              <div className="view-pending-table-master-header17">
                                <div className="view-pending-container55">
                                  <div className="view-pending-text-icon17">
                                    <span className="view-pending-text207 Paragraph-CaptionSmal">
                                      Quantity
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-separator45">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-0xv3-200h.png"
                                    className="view-pending-rectangle43"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame100000750316">
                              <div className="view-pending-content66">
                                <div className="view-pending-container56">
                                  <div className="view-pending-content67">
                                    <div className="view-pending-avatar-text34">
                                      <div className="view-pending-text208">
                                        <span className="view-pending-text209 ParagraphSmallRegular1">
                                          100 pieces
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator46">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-5ombr-200h.png"
                                    className="view-pending-rectangle44"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content68">
                                <div className="view-pending-container57">
                                  <div className="view-pending-content69">
                                    <div className="view-pending-avatar-text35">
                                      <div className="view-pending-text210">
                                        <span className="view-pending-text211 ParagraphSmallRegular1">
                                          45 Kg
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator47">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-pi6-200h.png"
                                    className="view-pending-rectangle45"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content70">
                                <div className="view-pending-container58">
                                  <div className="view-pending-content71">
                                    <div className="view-pending-avatar-text36">
                                      <div className="view-pending-text212">
                                        <span className="view-pending-text213 ParagraphSmallRegular1">
                                          30 Units
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator48">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-rorg-200h.png"
                                    className="view-pending-rectangle46"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content72">
                                <div className="view-pending-container59">
                                  <div className="view-pending-content73">
                                    <div className="view-pending-avatar-text37">
                                      <div className="view-pending-text214">
                                        <span className="view-pending-text215 ParagraphSmallRegular1">
                                          35 Units
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator49"></div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame10000075102">
                            <div className="view-pending-header19">
                              <div className="view-pending-table-master-header18">
                                <div className="view-pending-container60">
                                  <div className="view-pending-text-icon18">
                                    <span className="view-pending-text216 Paragraph-CaptionSmal">
                                      Price
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-separator50">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-mr6-200h.png"
                                    className="view-pending-rectangle47"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame100000750317">
                              <div className="view-pending-content74">
                                <div className="view-pending-container61">
                                  <div className="view-pending-content75">
                                    <div className="view-pending-avatar-text38">
                                      <div className="view-pending-text217">
                                        <span className="view-pending-text218 ParagraphSmallRegular1">
                                          $200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator51">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-h9ci-200h.png"
                                    className="view-pending-rectangle48"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content76">
                                <div className="view-pending-container62">
                                  <div className="view-pending-content77">
                                    <div className="view-pending-avatar-text39">
                                      <div className="view-pending-text219">
                                        <span className="view-pending-text220 ParagraphSmallRegular1">
                                          $350.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator52">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-xqnj-200h.png"
                                    className="view-pending-rectangle49"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content78">
                                <div className="view-pending-container63">
                                  <div className="view-pending-content79">
                                    <div className="view-pending-avatar-text40">
                                      <div className="view-pending-text221">
                                        <span className="view-pending-text222 ParagraphSmallRegular1">
                                          $300.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator53">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-nr-200h.png"
                                    className="view-pending-rectangle50"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content80">
                                <div className="view-pending-container64">
                                  <div className="view-pending-content81">
                                    <div className="view-pending-avatar-text41">
                                      <div className="view-pending-text223">
                                        <span className="view-pending-text224 ParagraphSmallRegular1">
                                          $200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator54"></div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame10000075152">
                            <div className="view-pending-header20">
                              <div className="view-pending-table-master-header19">
                                <div className="view-pending-container65">
                                  <div className="view-pending-text-icon19">
                                    <span className="view-pending-text225 Paragraph-CaptionSmal">
                                      Amount
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-separator55">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-nloh-200h.png"
                                    className="view-pending-rectangle51"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame100000750318">
                              <div className="view-pending-content82">
                                <div className="view-pending-container66">
                                  <div className="view-pending-content83">
                                    <div className="view-pending-avatar-text42">
                                      <div className="view-pending-text226">
                                        <span className="view-pending-text227 ParagraphSmallRegular1">
                                          $2,000.0
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator56">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-9opc-200h.png"
                                    className="view-pending-rectangle52"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content84">
                                <div className="view-pending-container67">
                                  <div className="view-pending-content85">
                                    <div className="view-pending-avatar-text43">
                                      <div className="view-pending-text228">
                                        <span className="view-pending-text229 ParagraphSmallRegular1">
                                          $2,500.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator57">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-jih-200h.png"
                                    className="view-pending-rectangle53"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content86">
                                <div className="view-pending-container68">
                                  <div className="view-pending-content87">
                                    <div className="view-pending-avatar-text44">
                                      <div className="view-pending-text230">
                                        <span className="view-pending-text231 ParagraphSmallRegular1">
                                          $1,500.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator58">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-1qvp-200h.png"
                                    className="view-pending-rectangle54"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content88">
                                <div className="view-pending-container69">
                                  <div className="view-pending-content89">
                                    <div className="view-pending-avatar-text45">
                                      <div className="view-pending-text232">
                                        <span className="view-pending-text233 ParagraphSmallRegular1">
                                          $1,500.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator59">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-wnav-200h.png"
                                    className="view-pending-rectangle55"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="view-pending-frame10000075202">
                            <div className="view-pending-header21">
                              <div className="view-pending-table-master-header20">
                                <div className="view-pending-container70">
                                  <div className="view-pending-text-icon20">
                                    <span className="view-pending-text234 Paragraph-CaptionSmal">
                                      Expected Delivery Date
                                    </span>
                                  </div>
                                </div>
                                <div className="view-pending-separator60">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-2cbs-200h.png"
                                    className="view-pending-rectangle56"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="view-pending-frame100000750319">
                              <div className="view-pending-content90">
                                <div className="view-pending-container71">
                                  <div className="view-pending-content91">
                                    <div className="view-pending-avatar-text46">
                                      <div className="view-pending-text235">
                                        <span className="view-pending-text236 ParagraphSmallRegular1">
                                          2024-08-07
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator61">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-sc5-200h.png"
                                    className="view-pending-rectangle57"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content92">
                                <div className="view-pending-container72">
                                  <div className="view-pending-content93">
                                    <div className="view-pending-avatar-text47">
                                      <div className="view-pending-text237">
                                        <span className="view-pending-text238 ParagraphSmallRegular1">
                                          2024-08-07
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator62">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-t0j-200h.png"
                                    className="view-pending-rectangle58"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content94">
                                <div className="view-pending-container73">
                                  <div className="view-pending-content95">
                                    <div className="view-pending-avatar-text48">
                                      <div className="view-pending-text239">
                                        <span className="view-pending-text240 ParagraphSmallRegular1">
                                          2024-08-07
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator63">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-3kdf-200h.png"
                                    className="view-pending-rectangle59"
                                  />
                                </div>
                              </div>
                              <div className="view-pending-content96">
                                <div className="view-pending-container74">
                                  <div className="view-pending-content97">
                                    <div className="view-pending-avatar-text49">
                                      <div className="view-pending-text241">
                                        <span className="view-pending-text242 ParagraphSmallRegular1">
                                          2024-08-07
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-pending-separator64">
                                  <img
                                    alt="RectangleI119"
                                    src="/external/rectanglei119-5i2d-200h.png"
                                    className="view-pending-rectangle60"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="view-pending-frame1618868866">
                          <div className="view-pending-frame1618868188">
                            <span className="view-pending-text243 ParagraphMediumRegular">
                              Sub Total
                            </span>
                            <span className="view-pending-text244 ParagraphMediumRegular">
                              $8,000.00
                            </span>
                          </div>
                          <div className="view-pending-frame1618868189">
                            <span className="view-pending-text245 ParagraphMediumRegular">
                              Total
                            </span>
                            <span className="view-pending-text246 Paragraph-MediumBold">
                              $8,750.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="view-pending-terms">
                    <div className="view-pending-frame1618868193">
                      <div className="view-pending-frame1618868720">
                        <img
                          alt="iconsigndocI119"
                          src="/external/iconsigndoci119-ucw.svg"
                          className="view-pending-iconsigndoc2"
                        />
                        <div className="view-pending-frame16188687191">
                          <div className="view-pending-frame16188687192">
                            <span className="view-pending-text247 HeadingH6Semibold">
                              Terms and Attachments
                            </span>
                            <span className="view-pending-text248 ParagraphSmallRegular1">
                              Review payment and delivery terms
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="view-pending-frame1618868690">
                        <img
                          alt="iconchevrondownI119"
                          src="/external/iconchevrondowni119-vsrn.svg"
                          className="view-pending-iconchevrondown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPending
