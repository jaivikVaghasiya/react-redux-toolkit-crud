import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, listUser } from '../features/userSlice';

const ListUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  const data = useSelector((state) => state.users);
  console.log('data :>> ', data);
  if (data.error)
    return <div>Something went Wrong {data?.error?.message || ''}</div>;

    const handleDelete =(e, id)=>{
      e.preventDefault();
      console.log('id :>> ', id);
      dispatch(deleteUser(id))
    }
  return (
    <>
      <h2>User Details</h2>
      {data?.users &&
        data.users.map((ele) => (
          <div className="card text-center w-50 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title">
                {ele.firstName + ' ' + ele.lastName}
              </h5>
              <p className="card-text">
                you living at {ele.state} and your beautiful city is {ele.city}.
                Your area pincode is {ele.zipCode}
              </p>
              <button className="btn btn-primary mx-3">Edit</button>
              <button
                className="btn btn-primary mx-3"
                onClick={(e)=>handleDelete(e,ele.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListUser;
