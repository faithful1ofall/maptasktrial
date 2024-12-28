import React from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'
import './edititeminfo.css'
import Layout from '../components/Layout'

const Edititeminfo = (props) => {
  const history = useHistory();

  const handleConfirm = () => {
    history.push('/edit-terms-viewattachments1');
  }

  return (
    <Layout>
      <Helmet>
        <title>exported project</title>
      </Helmet>

            <div className="edititeminfo-frame1618868179">
              <div className="edititeminfo-frame1618868154">
                <div className="edititeminfo-breadcrumb1">
                  <div className="edititeminfo-container16">
                    <div className="edititeminfo-content-separators">
                      <div className="edititeminfo-content4">
                        <span className="edititeminfo-text26 ParagraphSmallMedium">
                          Quotes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="edititeminfo-breadcrumb2">
                  <div className="edititeminfo-container17">
                    <div className="edititeminfo-content-separator">
                      <div className="edititeminfo-content5">
                        <span className="edititeminfo-text27 ParagraphSmallMedium">
                         / Quote Response
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edititeminfo-frame1618868189">
                <div className="edititeminfo-frame1618868105">
                  <div className="edititeminfo-frame1618868106">
                    <div className="edititeminfo-frame1618868103">
                      <div className="edititeminfo-frame60763">
                        <div className="edititeminfo-group606211">
                        <div className="edititeminfo-group606213">
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
                              1
                            </text>
                          </svg>
                        </div>
                        </div>
                        <div className="edititeminfo-frame1618868127">
                          <span className="edititeminfo-text28 ParagraphMediumSemibold">
                            Request Information
                          </span>
                          <span className="edititeminfo-text29 ParagraphXSmallRegular">
                            Provide details about the RFQ
                          </span>
                        </div>
                      </div>
                      <div className="edititeminfo-frame60766">
                      <div className="edititeminfo-group606213">
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
                        <div className="edititeminfo-frame1618868126">
                          <span className="edititeminfo-text30 Paragraph-MediumMedium">
                            Terms and Attachments
                          </span>
                          <span className="edititeminfo-text31 ParagraphXSmallRegular">
                            Payment and delivery terms
                          </span>
                        </div>
                      </div>
                      <div className="edititeminfo-frame60768">
                        <div className="edititeminfo-group606213">
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
                              3
                            </text>
                          </svg>
                        </div>

                        <div className="edititeminfo-frame1618868125">
                          <span className="edititeminfo-text32 Paragraph-MediumMedium">
                            Review
                          </span>
                          <span className="edititeminfo-text33 ParagraphXSmallRegular">
                            Confirm all information provided
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="edititeminfo-frame16188681901">
                  <div className="edititeminfo-frame1618867828">
                    <div className="edititeminfo-container18">
                      <div className="edititeminfo-container19">
                        <div className="edititeminfo-container20">
                          <span className="edititeminfo-text34 Headings-H5H5Bold">
                            Request for Quote
                          </span>
                          <span className="edititeminfo-text35 Paragraph-MediumRegular">
                            Fill out these details to send the RFQ
                          </span>
                        </div>
                      </div>
                      <div className="edititeminfo-container21">
                        <div className="edititeminfo-frame1618867729">
                          <div className="edititeminfo-frame16188681902">
                            <div className="edititeminfo-input10">
                              <div className="edititeminfo-label-frame11">
                                <span className="edititeminfo-text36 ParagraphSmallBold">
                                  RFQ No
                                </span>
                                <div className="edititeminfo-input-frame11">
                                  <div className="edititeminfo-left-content20">
                                    <div className="edititeminfo-text-cursor11">
                                      <span className="edititeminfo-text37 ParagraphSmallRegular">
                                        RFQ-10234
                                      </span>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-right-content10"></div>
                                </div>
                              </div>
                            </div>
                            <div className="edititeminfo-input11">
                              <div className="edititeminfo-label-frame12">
                                <span className="edititeminfo-text38 ParagraphSmallBold">
                                  Title
                                </span>
                                <div className="edititeminfo-input-frame12">
                                  <div className="edititeminfo-left-content21">
                                    <div className="edititeminfo-text-cursor12">
                                      <span className="edititeminfo-text39 ParagraphSmallRegular">
                                        Request for Equipments
                                      </span>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-right-content11"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="edititeminfo-frame16188681902">
                          <div className="edititeminfo-input10">
                              <div className="edititeminfo-label-frame11">
                                <span className="edititeminfo-text36 ParagraphSmallBold">
                                  Department
                                </span>
                                <div className="edititeminfo-input-frame11">
                                  <div className="edititeminfo-left-content20">
                                    <div className="edititeminfo-text-cursor11">
                                      <span className="edititeminfo-text37 ParagraphSmallRegular">
                                        Maternity
                                      </span>
                                    </div>
                                    
                                  </div>
                                  <div className="edititeminfo-right-content10">
                                      <img
                                        alt="IconrightI132"
                                        src="/external/icon-x.svg"
                                        className="edititeminfo-iconright1"
                                      />
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className="edititeminfo-input11">
                              <div className="edititeminfo-label-frame12">
                                <span className="edititeminfo-text38 ParagraphSmallBold">
                                    Expected delivery date
                                </span>
                                <div className="edititeminfo-input-frame12">
                                  <div className="edititeminfo-left-content21">
                                    <img
                                      alt="IconleftI132"
                                      src="/external/iconlefti132-7y9g.svg"
                                      className="edititeminfo-iconleft17"
                                    />
                                    <div className="edititeminfo-text-cursor12">
                                      <span className="edititeminfo-text39 ParagraphSmallRegular">
                                       2024-12-02
                                      </span>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-right-content11"></div>
                                    
                                </div>
                                <span className="edititeminfo-text44 ParagraphXSmallMedium1">
                                      Calculated based on lead time and issue date
                                    </span>
                              </div>
                            </div>
                          </div>
                          <div className="edititeminfo-frame16188682161">
                            <div className="edititeminfo-frame1618868267">
                              <div className="edititeminfo-frame1618868938">
                                <div className="edititeminfo-frame16188682171">
                                  <div className="edititeminfo-frame16188682172">
                                    <img
                                      alt="Line5681327"
                                      src="/external/icon-bin.svg"
                                      className="edititeminfo-line5681"
                                    />
                                    <div className="edititeminfo-frame1618867806">
                                      <div className="edititeminfo-frame1618868158">
                                        <span className="edititeminfo-text45 Paragraph-MediumBold">
                                          Add Items
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-frame16188682162">
                                    <span className="edititeminfo-text46 Paragraph-SmallMedium">
                                      Items
                                    </span>
                                    <span className="edititeminfo-text47 Paragraph-SmallMedium">
                                      Variant
                                    </span>
                                    <span className="edititeminfo-text48 Paragraph-SmallMedium">
                                      Quantity
                                    </span>
                                    <span className="edititeminfo-text49 Paragraph-SmallMedium">
                                      Price
                                    </span>
                                    <span className="edititeminfo-text50 Paragraph-SmallMedium">
                                      Expected delivery date
                                    </span>
                                    <span className="edititeminfo-text51 Paragraph-SmallMedium">
                                      Amount
                                    </span>
                                    <div className="edititeminfo-frame1618868865"></div>
                                  </div>
                                </div>
                                <div className="edititeminfo-frame1618868275">
                                  <div className="edititeminfo-input14">
                                    <div className="edititeminfo-label-frame15">
                                      <div className="edititeminfo-input-frame15">
                                        <div className="edititeminfo-left-content24">
                                          <div className="edititeminfo-text-cursor15">
                                            <span className="edititeminfo-text52 ParagraphSmallRegular">
                                              Oxygen Concentrator
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content14">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-7ygo.svg"
                                            className="edititeminfo-iconright4"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input15">
                                    <div className="edititeminfo-label-frame16">
                                      <div className="edititeminfo-input-frame16">
                                        <div className="edititeminfo-left-content25">
                                          <div className="edititeminfo-text-cursor16">
                                            <span className="edititeminfo-text53 ParagraphSmallRegular">
                                              Blue
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content15">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-72p.svg"
                                            className="edititeminfo-iconright5"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input16">
                                    <div className="edititeminfo-label-frame17">
                                      <div className="edititeminfo-input-frame17">
                                        <div className="edititeminfo-left-content26">
                                          <div className="edititeminfo-text-cursor17">
                                            <span className="edititeminfo-text54 ParagraphSmallRegular">
                                              100
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-frame1618868156">
                                          <span className="edititeminfo-text55 Paragraph-CaptionSmal">
                                            Pack
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input17">
                                    <div className="edititeminfo-label-frame18">
                                      <div className="edititeminfo-input-frame18">
                                        <div className="edititeminfo-left-content27">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-myt9.svg"
                                            className="edititeminfo-iconleft14"
                                          />
                                          <div className="edititeminfo-text-cursor18">
                                            <span className="edititeminfo-text56 ParagraphSmallRegular">
                                              12.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input18">
                                    <div className="edititeminfo-label-frame19">
                                      <div className="edititeminfo-input-frame19">
                                        <div className="edititeminfo-left-content28">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-eou.svg"
                                            className="edititeminfo-iconleft15"
                                          />
                                          <div className="edititeminfo-text-cursor19">
                                            <span className="edititeminfo-text57 ParagraphSmallRegular">
                                              2023-12-02
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-content6">
                                    <div className="edititeminfo-avatar-text1">
                                      <div className="edititeminfo-text58">
                                        <span className="edititeminfo-text59 ParagraphSmallSemibold">
                                          $1200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    alt="iconbin1327"
                                    src="/external/icon-bin.svg"
                                    className="edititeminfo-iconbin1"
                                  />
                                </div>
                                <div className="edititeminfo-frame1618868276">
                                  <div className="edititeminfo-input19">
                                    <div className="edititeminfo-label-frame20">
                                      <div className="edititeminfo-input-frame20">
                                        <div className="edititeminfo-left-content29">
                                          <div className="edititeminfo-text-cursor20">
                                            <span className="edititeminfo-text60 ParagraphSmallRegular">
                                              Mechanical Ventilator
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content16">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-7ygo.svg"
                                            className="edititeminfo-iconright4"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input20">
                                    <div className="edititeminfo-label-frame21">
                                      <div className="edititeminfo-input-frame21">
                                        <div className="edititeminfo-left-content30">
                                          <div className="edititeminfo-text-cursor21">
                                            <span className="edititeminfo-text61 ParagraphSmallRegular">
                                              Blue
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content17">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-72p.svg"
                                            className="edititeminfo-iconright5"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input21">
                                    <div className="edititeminfo-label-frame22">
                                      <div className="edititeminfo-input-frame22">
                                        <div className="edititeminfo-left-content31">
                                          <div className="edititeminfo-text-cursor22">
                                            <span className="edititeminfo-text62 ParagraphSmallRegular">
                                              100
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-frame16188681571">
                                          <span className="edititeminfo-text63 Paragraph-CaptionSmal">
                                            Pack
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input22">
                                    <div className="edititeminfo-label-frame23">
                                      <div className="edititeminfo-input-frame23">
                                        <div className="edititeminfo-left-content32">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-myt9.svg"
                                            className="edititeminfo-iconleft14"
                                          />
                                          <div className="edititeminfo-text-cursor23">
                                            <span className="edititeminfo-text64 ParagraphSmallRegular">
                                              12.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input23">
                                    <div className="edititeminfo-label-frame24">
                                      <div className="edititeminfo-input-frame24">
                                        <div className="edititeminfo-left-content33">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-eou.svg"
                                            className="edititeminfo-iconleft15"
                                          />
                                          <div className="edititeminfo-text-cursor24">
                                            <span className="edititeminfo-text65 ParagraphSmallRegular">
                                              2023-12-02
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-content7">
                                    <div className="edititeminfo-avatar-text2">
                                      <div className="edititeminfo-text66">
                                        <span className="edititeminfo-text67 ParagraphSmallSemibold">
                                          $1200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    alt="iconbin1328"
                                    src="/external/icon-bin.svg"
                                    className="edititeminfo-iconbin2"
                                  />
                                </div>
                                <div className="edititeminfo-frame1618868277">
                                  <div className="edititeminfo-input24">
                                    <div className="edititeminfo-label-frame25">
                                      <div className="edititeminfo-input-frame25">
                                        <div className="edititeminfo-left-content34">
                                          <div className="edititeminfo-text-cursor25">
                                            <span className="edititeminfo-text68 ParagraphSmallRegular">
                                              Patient Monitor
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content18">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-38r.svg"
                                            className="edititeminfo-iconright6"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input25">
                                    <div className="edititeminfo-label-frame26">
                                      <div className="edititeminfo-input-frame26">
                                        <div className="edititeminfo-left-content35">
                                          <div className="edititeminfo-text-cursor26">
                                            <span className="edititeminfo-text69 ParagraphSmallRegular">
                                              Blue
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content19">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-v0qh.svg"
                                            className="edititeminfo-iconright7"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input26">
                                    <div className="edititeminfo-label-frame27">
                                      <div className="edititeminfo-input-frame27">
                                        <div className="edititeminfo-left-content36">
                                          <div className="edititeminfo-text-cursor27">
                                            <span className="edititeminfo-text70 ParagraphSmallRegular">
                                              100
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-frame16188681572">
                                          <span className="edititeminfo-text71 Paragraph-CaptionSmal">
                                            Pack
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input27">
                                    <div className="edititeminfo-label-frame28">
                                      <div className="edititeminfo-input-frame28">
                                        <div className="edititeminfo-left-content37">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-soym.svg"
                                            className="edititeminfo-iconleft16"
                                          />
                                          <div className="edititeminfo-text-cursor28">
                                            <span className="edititeminfo-text72 ParagraphSmallRegular">
                                              12.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input28">
                                    <div className="edititeminfo-label-frame29">
                                      <div className="edititeminfo-input-frame29">
                                        <div className="edititeminfo-left-content38">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-7y9g.svg"
                                            className="edititeminfo-iconleft17"
                                          />
                                          <div className="edititeminfo-text-cursor29">
                                            <span className="edititeminfo-text73 ParagraphSmallRegular">
                                              2023-12-02
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-content8">
                                    <div className="edititeminfo-avatar-text3">
                                      <div className="edititeminfo-text74">
                                        <span className="edititeminfo-text75 ParagraphSmallSemibold">
                                          $1200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    alt="iconbin1328"
                                    src="/external/icon-bin.svg"
                                    className="edititeminfo-iconbin3"
                                  />
                                </div>
                                <div className="edititeminfo-frame1618868278">
                                  <div className="edititeminfo-input29">
                                    <div className="edititeminfo-label-frame30">
                                      <div className="edititeminfo-input-frame30">
                                        <div className="edititeminfo-left-content39">
                                          <div className="edititeminfo-text-cursor30">
                                            <span className="edititeminfo-text76 ParagraphSmallRegular">
                                              Mechanical Ventilator
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content20">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-7j5n.svg"
                                            className="edititeminfo-iconright8"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input30">
                                    <div className="edititeminfo-label-frame31">
                                      <div className="edititeminfo-input-frame31">
                                        <div className="edititeminfo-left-content40">
                                          <div className="edititeminfo-text-cursor31">
                                            <span className="edititeminfo-text77 ParagraphSmallRegular">
                                              Blue
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-right-content21">
                                          <img
                                            alt="IconrightI132"
                                            src="/external/iconrighti132-oni.svg"
                                            className="edititeminfo-iconright9"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input31">
                                    <div className="edititeminfo-label-frame32">
                                      <div className="edititeminfo-input-frame32">
                                        <div className="edititeminfo-left-content41">
                                          <div className="edititeminfo-text-cursor32">
                                            <span className="edititeminfo-text78 ParagraphSmallRegular">
                                              100
                                            </span>
                                          </div>
                                        </div>
                                        <div className="edititeminfo-frame16188681573">
                                          <span className="edititeminfo-text79 Paragraph-CaptionSmal">
                                            Pack
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input32">
                                    <div className="edititeminfo-label-frame33">
                                      <div className="edititeminfo-input-frame33">
                                        <div className="edititeminfo-left-content42">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-h5fm.svg"
                                            className="edititeminfo-iconleft18"
                                          />
                                          <div className="edititeminfo-text-cursor33">
                                            <span className="edititeminfo-text80 ParagraphSmallRegular">
                                              12.00
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-input33">
                                    <div className="edititeminfo-label-frame34">
                                      <div className="edititeminfo-input-frame34">
                                        <div className="edititeminfo-left-content43">
                                          <img
                                            alt="IconleftI132"
                                            src="/external/iconlefti132-nd4p.svg"
                                            className="edititeminfo-iconleft19"
                                          />
                                          <div className="edititeminfo-text-cursor34">
                                            <span className="edititeminfo-text81 ParagraphSmallRegular">
                                              2023-12-02
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="edititeminfo-content9">
                                    <div className="edititeminfo-avatar-text4">
                                      <div className="edititeminfo-text82">
                                        <span className="edititeminfo-text83 ParagraphSmallSemibold">
                                          $1200.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    alt="iconbin1328"
                                    src="/external/icon-bin.svg"
                                    className="edititeminfo-iconbin4"
                                  />
                                </div>
                              </div>
                              <div className="edititeminfo-frame1618868937">
                                <div className="edititeminfo-frame1618868188">
                                  <span className="edititeminfo-text84 ParagraphMediumRegular">
                                    Sub Total
                                  </span>
                                  <span className="edititeminfo-text85 ParagraphMediumRegular">
                                    $1200.00
                                  </span>
                                </div>
                                <div className="edititeminfo-frame1618868274">
                                  <div className="edititeminfo-input34">
                                    <div className="edititeminfo-label-frame35">
                                      <span className="edititeminfo-text86 ParagraphSmallBold">
                                        Note
                                      </span>
                                      <div className="edititeminfo-input-frame35">
                                        <div className="edititeminfo-left-content44">
                                          <div className="edititeminfo-text-cursor35">
                                            <span className="edititeminfo-text87 ParagraphSmallRegular">
                                              Enter note here
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="edititeminfo-text88 ParagraphXSmallMedium1">
                                      0/200
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              alt="Line5681328"
                              src="https://play.teleporthq.io/static/svg/default-img.svg"
                              className="edititeminfo-line5682"
                            />
                          </div>
                        </div>
                        <div className="edititeminfo-frame1618868101">
                          <button className="edititeminfo-buttongreys">
                            <div className="edititeminfo-container22">
                              <span className="edititeminfo-text89 ParagraphSmallBold">
                                Cancel
                              </span>
                            </div>
                          </button>
                          <button className="edititeminfo-buttonsecondary">
                            <div className="edititeminfo-container23">
                              <span className="edititeminfo-text90 ParagraphSmallBold">
                                Save as draft
                              </span>
                            </div>
                          </button>
                          <button className="edititeminfo-buttonprimary">
                            <div className="edititeminfo-container24">
                              <span className="edititeminfo-text91 ParagraphSmallBold">
                              <button onClick={handleConfirm} className="view-pending-respond-button">
                                Continue
                              </button>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
    </Layout>
  )
}

export default Edititeminfo
