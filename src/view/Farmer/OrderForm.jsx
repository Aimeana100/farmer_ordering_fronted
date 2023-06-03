import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import instance from '../../API/axiosInstance';

const OrderForm = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const size = watch('size') || 0;
  const seed = watch('seed') || null;
  const [seeds, setSeeds] = useState([]);

  const createOrder = async (data) => {
    await instance.post('/order/create', data).then((res) => {
      console.log(res);
    });
    reset();
  };

  useEffect(() => {
    const getSeeds = async () => {
      await instance.get('/seed/all').then((res) => {
        console.log(res.data.data);
        setSeeds(res.data.data);
      });
    };
    getSeeds();
  }, []);

  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong>Order Seed && Fertlizer</strong>
        </h3>

        <div>
          <div className="form-container">
            <form
              name="seedCreateFrm"
              className="form"
              onSubmit={handleSubmit(createOrder)}
            >
              <div>
                <label htmlFor="size"> Land size</label>
                <input
                  type="number"
                  name="size"
                  step="any"
                  id="size"
                  placeholder="...size"
                  required
                  {...register('size')}
                />
              </div>
              <div>
                <label htmlFor="seed">Seeds</label>
                <select name="seed" id="seed" required {...register('seed')}>
                  {seeds && seeds.length !== 0
                    ? seeds.map((el, i) => (
                        <option key={i * 100} value={el.id}>
                          {el.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              {/* <div>
								{seed ? null : <p>Please select the type of seed first</p>}
								<label htmlFor="fertilizer"> Fertilizers</label>
								<select>
									{seed
										? seeds
												.filter((el) => el.id === seed)[0]
												.fertilizers.map((el, i) => (
													<option
														key={i * 1000}
														value={el.id}
														{...register("fertilizer")}>
														{el.name}
													</option>
												))
										: null}
								</select>
							</div> */}
              {seed ? (
                <p>
                  Total quantity of seeds :{' '}
                  {Number(
                    seeds.filter((el) => el.id === Number(seed))[0]
                      .kg_per_acre * size
                  )}{' '}
                  Kg
                </p>
              ) : null}

              {/* {fertilizer ? (
                <p>
                  Total quantity of fertilizer :{' '}
                  {Number(
                    seeds.filter((el) => el.id === Number(fertilizer))[0]
                      .kg_per_acre * size
                  )}{' '}
                  Kg
                </p>
              ) : null} */}

              <div className="button-container">
                <button type="submit" className="add-button">
                  Order{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
