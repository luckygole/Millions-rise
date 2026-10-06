import {CFG} from '../config';
export default function ApplyModal({name,onClose}){if(!name)return null;
return(<div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"><div onClick={e=>e.stopPropagation()} className="card w-full max-w-md">
<h3 className="font-serif text-lg text-ink">Apply via Motilal Oswal</h3><p className="my-2 text-sm text-slate-600">{name}</p>
<a className="btn mb-2 block text-center" href={CFG.moIpo} target="_blank" rel="noreferrer">Existing client – Login & Apply</a>
<a className="btn btn-o block text-center" href={CFG.moOpen} target="_blank" rel="noreferrer">New – Open Demat Account</a>
<button onClick={onClose} className="mt-3 w-full text-sm text-slate-500">Close</button></div></div>)}
