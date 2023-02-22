import React from 'react';
import { Card } from 'react-bootstrap';
import {BsFillInfoSquareFill} from 'react-icons/bs'

const LinkedInNews = () => {
  return (
    <Card>
          <Card.Header>
            <Card.Title>LinkedIn News<BsFillInfoSquareFill/></Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <span>Why workers are 'conscious quitting'</span>
                <span className="news-details">9m ago &#8226; 20,998 readers</span>
              </li>
              <li>
                <span>Gen Z workers are burnt out: report</span>
                <span className="news-details">10m ago &#8226; 14,799 readers</span>
              </li>
              <li>
                <span>Honey, WFH shrunk the office</span>
                <span className="news-details">9m ago &#8226; 12,604 readers</span>
              </li>
              <li>
                <span>'Breakthrough' for 4-day week trial</span>
                <span className="news-details">8m ago &#8226; 1,364 readers</span>
              </li>
              <li>
                <span>How to decide between job offers</span>
                <span className="news-details">4d ago &#8226; 1,984 readers</span>
              </li>
            </ul>
          </Card.Body>
        </Card>

  );
}

export default LinkedInNews;
