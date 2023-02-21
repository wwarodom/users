import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button className='border-2 border-black m-4 p-2' onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}