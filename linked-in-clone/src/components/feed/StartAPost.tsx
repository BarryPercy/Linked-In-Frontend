import React from "react"
import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md"
import { BsFillPlayBtnFill, BsBriefcaseFill } from "react-icons/bs"
import { Card } from "react-bootstrap"



export default function StartAPost() {
 

  return (
    <>
    <Card>
        <div id="feed-start-a-post-container" className="p-feed">
        <div id="start-a-post-top">
          <div className="recommended-user-image mr-1 d-flex p-3" style={{ objectFit: "cover" }}>
            <img alt="Avatar" style={{ height: "100%" }} />
            <div
            id="start-a-post"
            className="gray-hover small-header-text border ml-3 p-1" style={{borderRadius: "20px", width: "400px"}}
          >
            Start a post
          </div>
          </div>
        </div>
        <div id="start-a-post-lower" className="small-header-text d-flex justify-content-around">
          <div className="start-a-post-icon-text gray-hover d-flex align-items-center">
            <MdPhotoSizeSelectActual className="text-primary" style={{ fontSize: "20px" }} />

            <span className="pl-2">Photo</span>
          </div>
          <div className="start-a-post-icon-text gray-hover d-flex align-items-center ">
            <BsFillPlayBtnFill className="text-success" style={{ fontSize: "20px" }} />
            <span className="pl-2">Video</span>
          </div>
          <div className="start-a-post-icon-text gray-hover d-flex align-items-center">
            <BsBriefcaseFill className="indigo" style={{ fontSize: "20px" }} />
            <span className="pl-2">Job</span>
          </div>
          <div className="start-a-post-icon-text gray-hover d-flex align-items-center">
            <MdOutlineArticle className="orange" style={{ fontSize: "20px" }} />
            <span className="pl-2">Write Article</span>
          </div>
        </div>
      </div> 
    </Card>
    </>
  )
}