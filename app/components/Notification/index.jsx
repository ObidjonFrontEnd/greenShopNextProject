'use client';
import React, { useMemo, useImperativeHandle, forwardRef } from 'react';
import { notification } from 'antd';

const Context = React.createContext({ name: 'Default' });

const Notification = forwardRef((props, ref) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Уведомление: ${placement}`,
      description: <Context.Consumer>{({ name }) => `Привет, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  useImperativeHandle(ref, () => ({
    openNotification,
  }));

  const contextValue = useMemo(() => ({ name: 'Next.js + Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    </Context.Provider>
  );
});

export default Notification;
