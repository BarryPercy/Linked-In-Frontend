import React, { useState } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsPencil, BsPlusLg } from "react-icons/bs";
import { text } from 'stream/consumers';


interface Skill {
  id: number;
  name: string;
}

export default Skills