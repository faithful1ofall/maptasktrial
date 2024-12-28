
import React from 'react'
//import { Helmet } from 'react-helmet'
import './alert1.css'

const Alert1 = ({ onConfirm, onCancel }) => {
  return (
      <div className="alert1-alert">
        <div className="alert1-alert-container">
          <div className="alert1-alert-content">
            <div className="alert1-textsection">
              <span className="alert1-text1 HeadingH6Semibold">
                Confirmation
              </span>
              <span className="alert1-text2 ParagraphSmallMedium">
                You are about to submit this quote in response to RFQ ID, this
                will immediately be sent to the client “Westend Clear Hospital”.
                Are you sure you want to proceed?
              </span>
            </div>
            <div className="alert1ct-as">
              
              <button className="alert1-buttongreys" onClick={onCancel}>
                <div className="alert1-container2">
                  <span className="alert1-text3 ParagraphSmallSemibold">
                    Cancel
                  </span>
                </div>
              </button>
              
              <button className="alert1-buttonprimary" onClick={onConfirm}>
                <div className="alert1-container3">
                  <span className="alert1-text4 ParagraphSmallBold">
                    Continue
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Alert1
