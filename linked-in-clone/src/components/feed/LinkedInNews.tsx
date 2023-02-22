import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsFillInfoSquareFill, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const LinkedInNews = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Card>
      <Card.Title className='d-flex ml-4'>
        LinkedIn News
        <div className='ml-auto pr-4'>
          <BsFillInfoSquareFill />
        </div>
      </Card.Title>
      <Card.Body>
        <ul>
          <li>
            <span>Why workers are 'conscious quitting'</span>
            <p className='news-details'>9m ago &#8226; 20,998 readers</p>
          </li>
          <li>
            <span>Gen Z workers are burnt out: report</span>
            <p className='news-details'>10m ago &#8226; 14,799 readers</p>
          </li>
          <li>
            <span>Honey, WFH shrunk the office</span>
            <p className='news-details'>9m ago &#8226; 12,604 readers</p>
          </li>
          <li>
            <span>'Breakthrough' for 4-day week trial</span>
            <p className='news-details'>8m ago &#8226; 1,364 readers</p>
          </li>
          <li>
            <span>How to decide between job offers</span>
            <p className='news-details'>4d ago &#8226; 1,984 readers</p>
          </li>
          {showMore && (
            <>
              <li>
                <span>How to avoid 'toxic positivity'</span>
                <p className='news-details'>1d ago &#8226; 1,274 readers</p>
              </li>
              <li>
                <span>New quake strikes Türkiye, Syria</span>
                <p className='news-details'>55m ago &#8226; 374 readers</p>
              </li>
              <li>
                <span>Wall Street meets English football</span>
                <p className='news-details'>53m ago &#8226; 2,340 readers</p>
              </li>
              <li>
                <span>Want a pay rise? Ask now, say experts</span>
                <p className='news-details'>54m ago &#8226; 6,139 readers</p>
              </li>
              <li>
                <span>Contactless payments lead the charge</span>
                <p className='news-details'>54m ago &#8226; 406 readers</p>
              </li>
            </>
          )}
        </ul>
        {showMore ? (
          <Button variant='primary' onClick={handleClick}>
            Show Less <BsFillArrowUpCircleFill/>
          </Button>
        ) : (
          <Button variant='primary' onClick={handleClick}>
            See More <BsFillArrowDownCircleFill/>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default LinkedInNews;
