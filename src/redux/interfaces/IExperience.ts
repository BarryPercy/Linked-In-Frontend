export interface Exp {
  _id: string; // server generated
  role: string;
  company: string;
  startDate: string;
  endDate: string; // could be null
  description: string;
  area: string;
  username: string; // server generated
  createdAt: string; // server generated
  updatedAt: string; // server generated
  __v: number; // server generated
  image: []; // server generated on upload
}
