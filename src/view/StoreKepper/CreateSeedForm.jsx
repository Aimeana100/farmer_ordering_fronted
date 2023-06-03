import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import instance from '../../API/axiosInstance';

const CreateSeedForm = () => {
  const { user } = useSelector((state) => state.user);
  const { register, reset, handleSubmit } = useForm();
  const [seeds, setSeeds] = useState([]);
  const createSeed = async (data) => {
    await instance.post('/seed/create', data).then(() => {
      toast.success('Seed created!!!');
    });
    reset();
  };

  useEffect(() => {
    const getFertilizers = async () => {
      await instance
        .get('/seeds/all', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          console.log(seeds);
          setSeeds(res.data.data);
        });
    };
    getFertilizers();
  }, []);
  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong>Create Seed</strong>
        </h3>

        <div>
          <div className="form-container">
            <form
              name="seedCreateFrm"
              className="form"
              onSubmit={handleSubmit(createSeed)}
            >
              <div>
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="...name"
                  required
                  {...register('name')}
                />
              </div>
              <div>
                <label htmlFor="quantity"> Quantity /per accre</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step="any"
                  name="quantity"
                  id="quantity"
                  placeholder="...qty/a"
                  required
                  {...register('kg_per_acre')}
                />
              </div>
              <div>
                <label htmlFor="ferttizers"> Fertilizers</label>
                {seeds && seeds.length !== 0
                  ? seeds.map((el, i) => (
                      <input
                        key={i}
                        type="radio"
                        value={el.id}
                        name="fertilizer"
                        id="fertilizer"
                        {...register('fertlizers')}
                      />
                    ))
                  : null}
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Submit{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSeedForm;
