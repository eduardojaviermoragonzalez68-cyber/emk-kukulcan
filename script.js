function enviarW(e){
 e.preventDefault();
 const s=document.getElementById('serv').value;
 const c=document.getElementById('cant').value;
 const n=document.getElementById('nom').value;
 const msg=`Hola EMK Kukulcan, soy ${n}. Quiero cotizar: ${s} - Cantidad: ${c} pzas. Vengo de la web`;
 window.open(`https://wa.me/529997646962?text=${encodeURIComponent(msg)}`,'_blank');
}
