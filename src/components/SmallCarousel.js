import React from "react";
import Slide from "./Slide";
import { PeopleData } from "../data/people";

// class SmallCarousel extends Component {
//   state = {
//     people: PeopleData
//   }
//
//   render () {
//     return (
//       <section className="small-carousel">
//       this.state.people.map((person) => {
//         <Slide { ...person } key={ person.id } />
//       }
//       </section>
//     );
//   }
// }

const SmallCarousel = () => {
  let people = PeopleData.map((person) => {
    return <Slide { ...person } key={ person.id } />
  });
  return (
    <section className="small-carousel">
      { people }
    </section>
  );
}

export default SmallCarousel;
