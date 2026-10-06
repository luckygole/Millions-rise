import {useState,useEffect} from 'react';import {IPO,BL} from './data';
export const api=async(p,m='GET',b)=>{const t=localStorage.getItem('mr_token');const r=await fetch('/api'+p,{method:m,headers:{'Content-Type':'application/json',...(t&&{Authorization:'Bearer '+t})},body:b?JSON.stringify(b):undefined});
 const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Request failed');return d};
const useApi=(p,fb,map)=>{const[d,s]=useState(fb);useEffect(()=>{api(p).then(a=>Array.isArray(a)&&a.length&&s(a.map(map))).catch(()=>{})},[p]);return d};
export const useIpos=()=>useApi('/ipos',IPO,x=>({n:x.name,s:x.status,o:x.open,c:x.close,p:x.priceBand,l:x.lot,i:x.issueSize,ld:x.listing,sub:x.subscription||'—',g:x.gmp||'—'}));
export const useBlogs=()=>useApi('/posts',BL,x=>[x.tag||'Insight',x.title,x.body]);
