import {Navigate,useLocation,Link} from 'react-router-dom';import {useAuth} from '../context/AuthContext';
export default function RequireAdmin({children}){const{user,loading}=useAuth();const loc=useLocation();
 if(loading)return <p className="w py-20 text-center text-slate-500">Loading…</p>;
 if(!user)return <Navigate to="/login" state={{from:loc.pathname}} replace/>;
 if(user.role!=='admin')return(<div className="w py-20 text-center"><h1 className="font-serif text-2xl text-ink">Access denied</h1><p className="my-2 text-slate-500">This area is only for admins.</p><Link to="/" className="btn">Go Home</Link></div>);
 return children}
