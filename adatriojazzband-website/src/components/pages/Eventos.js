import React from 'react';
import '../../App.css';
import './Eventos.css';
import Footer from '../Footer';

export default function Eventos() {
    return (
<React.Fragment>
<section class="dl-blurbs">
<div className="parrafo">
    <dt>2022</dt>
    <br></br>
    <dt>19 junio</dt>
	<dd>Ayuntamiento de Fines (Fines, Almería) </dd>
	<hr></hr>
	<dt>22 julio</dt>
	<dd>BistroBar (Fines, Almería) </dd>
	<hr></hr>
	<dt>25 agosto</dt>
	<dd>El Refugio - Cala Higuera (San José, Almería) </dd>
	<hr></hr>
	<dt>16 septiembre</dt>
    <dd>BistroBar (Fines, Almería) </dd>
</div>
</section>


<Footer />
</React.Fragment>

    );
}