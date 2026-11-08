const t="condivisi",a="./condiviso.pdf";async function o(n){const i=(await n.formData()).get("pdf");return i instanceof File&&i.size>0?i:null}export{t as C,a,o as e};
