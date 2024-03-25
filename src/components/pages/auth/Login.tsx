/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Spin } from 'antd';
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'src/services';
import { useAuthStorageStore } from 'src/store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthStorageStore();
  // eslint-disable-next-line object-curly-newline
  const { mutate, data, isPending, isSuccess } = useLoginMutation();

  const onFinish: React.FormEventHandler<HTMLFormElement> | undefined = (e: any) => {
    e.preventDefault();
    mutate({ phone: e.target[0].value.split(' ').join(''), password: e.target[1].value });
  };

  React.useEffect(() => {
    if (isSuccess) {
      signIn({ token: data.data.token });
      navigate('/');
    }
  }, [isSuccess, signIn, navigate, data]);

  return (
    <section className="min-h-screen w-full grid place-items-center">
      <div className="relative max-w-96 w-full px-2 shadow-2xl py-5 rounded-2xl flex flex-col gap-5 bg-gray-100">
        <h1 className="text-2xl text-center font-bold tracking-widest">Войти</h1>
        <form onSubmit={onFinish} className="flex flex-col items-center gap-10">
          <div>
            <div className="w-full">
              <label htmlFor="phone" className="font-bold">
                Телефон номер
              </label>
              <ReactInputMask
                id="phone"
                type="tel"
                placeholder="Телефон номер"
                required
                // eslint-disable-next-line no-nonoctal-decimal-escape
                mask="+\9\98 99 999 99 99"
                className="w-full placeholder:tracking-wider bg-gray-200 rounded-xl py-2 px-4 mb-5 mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="font-bold capitalize">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                placeholder="Пароль"
                className="w-full rounded-xl bg-gray-200 py-2 px-4 mt-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white flex items-center px-10 rounded-md tracking-widest uppercase font-semibold transition-colors hover:bg-green-500"
          >
            {isPending ? (
              <Spin className="w-full h-full my-2 mx-4" />
            ) : (
              <span className="py-2">войти</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export { Login };
