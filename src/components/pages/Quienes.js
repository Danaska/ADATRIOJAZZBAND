import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import foto3 from '../img/foto3.jpeg';
import foto4 from '../img/foto4.png';
import foto5 from '../img/foto5.png';
import "./Quienes.css";
import QuienesItem from "./QuienesItem.js";

export default function Quienes() {

return (
    <React.Fragment>
    <div className='cardsq'>
      <h1>Nosotros...</h1>
      <div className='cards__containerq'>
        <div className='cards__wrapperq'>
          <ul className='cards__itemsq'>
            <QuienesItem
            src={foto3}
            text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatib'
            path='/eventos'
            />

            <QuienesItem
              src={foto4}
              text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatib'
              path='/eventos'
            />


            <QuienesItem
              src={foto5}
              text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatib'
              path='/eventos'
            />
          </ul>
        </div>
      </div>

    </div>


    <Footer />
    </React.Fragment>
    )
}