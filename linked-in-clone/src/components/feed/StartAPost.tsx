import React from "react"
import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md"
import { BsFillPlayBtnFill, BsBriefcaseFill } from "react-icons/bs"
import { Card, Image, Button } from "react-bootstrap"



export default function StartAPost() {
 

  return (
    <>
    <Card className="start-post">
        <div id="feed-start-a-post-container" className="p-feed">
        <div id="start-a-post-top">
          <div className="recommended-user-image mr-1 d-flex p-3" style={{ objectFit: "cover" }}>
            <Image className="avatar" src="./images/jovelynn.png "alt="Avatar" style={{ height: "100%" }} />
            <Button
            id="start-a-post"
            className="start-a-post-button d-flex border ml-3 p-1" style={{borderRadius: "30px", width: "400px"}}
          >
            <span className="align-self-center text-button-start">Start a post</span>
          </Button>
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