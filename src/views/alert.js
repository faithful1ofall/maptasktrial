import React from 'react'
import { Helmet } from 'react-helmet'
import './alert.css'

const Alert = ({ onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert-alert">
        <div className="alert-leftborder">
          <img
            alt="borderstreakI133"
            src="/external/borderstreaki133-44xp-200w.png"
            className="alert-borderstreak"
          />
        </div>
        <div className="alert-alert-container">
          <div className="alert-miscicon">
            <img
              alt="iconcheckcircleI133"
              src="/external/iconcheckcirclei133-ig1s.svg"
              className="alert-iconcheckcircle"
            />
          </div>
          <div className="alert-textsection">
            <span className="alert-text ParagraphSmallSemibold">
              RFQ ID sent successfully!
            </span>
          </div>
          <div className="alert-close">
            <div className="alert-dividers">
              <img
                alt="DividerI133"
                src="/external/divideri133-x1r-200w.png"
                className="alert-divider"
              />
            </div>
            <button className="alert-closebutton" onClick={onClose}>
              <img
                alt="iconmultiplyI133"
                src="/external/iconmultiplyi133-y7fn.svg"
                className="alert-iconmultiply"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
