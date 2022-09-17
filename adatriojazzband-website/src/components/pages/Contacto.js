import React from 'react';
import '../../App.css';
import './Contacto.css';
import Footer from '../Footer';


export default function Contacto() {
    return (
<React.Fragment>
<section class="dl-blurbs">
<div className="parrafoc">
    <dt>Teléfono</dt>
	<dd>623456789</dd>
	<hr></hr>
	<dt>Correo eletrónico</dt>
	<dd>ada@ada.es</dd>
	<hr></hr>
	<dt>Redes sociales</dt>
	<dd><a href="https://www.instagram.com/adajazzband/">Instagram</a></dd>
	<br></br>
	<br></br>

</div>
</section>


<Footer />
</React.Fragment>

    );
}