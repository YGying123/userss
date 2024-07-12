// import Footer from '@/components/Footer';
// import {login, register} from '@/services/ant-design-pro/api';
// import { getFakeCaptcha } from '@/services/ant-design-pro/login';
// import {
//   // AlipayCircleOutlined,
//   LockOutlined,
//   MobileOutlined,
//   // TaobaoCircleOutlined,
//   UserOutlined,
//   // WeiboCircleOutlined,
// } from '@ant-design/icons';
// import {
//   LoginForm,
//   ProFormCaptcha,
//   ProFormCheckbox,
//   ProFormText,
// } from '@ant-design/pro-components';
// import { Alert, message, Tabs } from 'antd';
// import React, { useState } from 'react';
// import { history, useModel } from 'umi';
// import styles from './index.less';
// import {PLANET_LINK, SYSTEM_LOGO} from "@/constant";
// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => (
//   <Alert
//     style={{
//       marginBottom: 24,
//     }}
//     message={content}
//     type="error"
//     showIcon
//   />
// );
// const Register: React.FC = () => {
//   // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
//   const [type, setType] = useState<string>('account');
//   // const { initialState, setInitialState } = useModel('@@initialState');
//   // const fetchUserInfo = async () => {
//   //   const userInfo = await initialState?.fetchUserInfo?.();
//   //   if (userInfo) {
//   //     await setInitialState((s) => ({
//   //       ...s,
//   //       currentUser: userInfo,
//   //     }));
//   //   }
//   // };
//
//   const handleSubmit = async (values: API.RegisterParams) => {
//     const {userPassword,checkPassword} =values;
//     //校验
//     if (userPassword!==checkPassword){
//       message.error('两次输入的密码不一致');
//       return;
//     }
//
//     try {
//       // 注册
//       // const user = await login({
//       //   ...values,
//       //   type,
//       // });
//       const id = await register(values);
//       if (id>0) {
//         const defaultLoginSuccessMessage = '注册成功！';
//         message.success(defaultLoginSuccessMessage);
//         // await fetchUserInfo();
//         /** 此方法会跳转到 redirect 参数所在的位置 */
//         if (!history) return;
//         const { query } = history.location;
//         const { redirect } = query as {
//           redirect: string;
//         };
//         history.push(
//           // redirect || '/'
//           {
//             pathname:'user/login',
//             query,
//           }
//
//         );
//         return;
//       }
//       console.log(id);
//       // 如果失败去设置用户错误信息
//       // setUserLoginState(id);
//     } catch (error) {
//       const defaultLoginFailureMessage = '注册失败，请重试！';
//       message.error(defaultLoginFailureMessage);
//     }
//   };
//   // const { status, type: loginType } = userLoginState;
//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <LoginForm
//           submitter={{
//             searchConfig: {
//               submitText:'注册'
//             }
//           }}
//
//           logo={<img alt="logo" src={SYSTEM_LOGO} />}
//           title="YG恐龙岛"
//           subTitle={<a href={PLANET_LINK} target="_blank" rel="noreferrer">恐龙岛圈子</a>}
//           initialValues={{
//             autoLogin: true,
//           }}
//           // actions={[
//           //   '其他注册方式 :',
//           //   <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
//           //   <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
//           //   <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
//           // ]}
//           onFinish={async (values) => {
//             await handleSubmit(values as API.RegisterParams);
//           }}
//         >
//           <Tabs activeKey={type} onChange={setType}>
//             <Tabs.TabPane key="account" tab={'账号密码注册'} />
//             {/*<Tabs.TabPane key="mobile" tab={'手机号注册'} />*/}
//           </Tabs>
//
//           {/*{status === 'error' && loginType === 'account' && (*/}
//           {/*  <LoginMessage content={'请输入账号'} />*/}
//           {/*)}*/}
//           {type === 'account' && (
//             <>
//               <ProFormText
//                 name="userAccount"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <UserOutlined className={styles.prefixIcon} />,
//                 }}
//                 placeholder={'请输入注册账号'}
//                 rules={[
//                   {
//                     required: true,
//                     message: '账号是必填项！',
//                   },
//                 ]}
//               />
//               <ProFormText.Password
//                 name="userPassword"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <LockOutlined className={styles.prefixIcon} />,
//                 }}
//                 placeholder={'请输入密码'}
//                 rules={[
//                   {
//                     required: true,
//                     message: '密码是必填项！',
//                   },
//                   {
//                     min:8,
//                     type:'string',
//                     message:'长度不能小于8',
//                   }
//                 ]}
//               />
//               <ProFormText.Password
//                 name="checkPassword"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <LockOutlined className={styles.prefixIcon} />,
//                 }}
//                 placeholder={'请再次输入密码'}
//                 rules={[
//                   {
//                     required: true,
//                     message: '确认密码是必填项！',
//                   },
//                   {
//                     min:8,
//                     type:'string',
//                     message:'长度不能小于8',
//                   }
//                 ]}
//               />
//             </>
//           )}
//
//           {/*{status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}*/}
//           {/*{type === 'mobile' && (*/}
//           {/*  <>*/}
//           {/*    <ProFormText*/}
//           {/*      fieldProps={{*/}
//           {/*        size: 'large',*/}
//           {/*        prefix: <MobileOutlined className={styles.prefixIcon} />,*/}
//           {/*      }}*/}
//           {/*      name="mobile"*/}
//           {/*      placeholder={'请输入手机号！'}*/}
//           {/*      rules={[*/}
//           {/*        {*/}
//           {/*          required: true,*/}
//           {/*          message: '手机号是必填项！',*/}
//           {/*        },*/}
//           {/*        {*/}
//           {/*          pattern: /^1\d{10}$/,*/}
//           {/*          message: '不合法的手机号！',*/}
//           {/*        },*/}
//           {/*      ]}*/}
//           {/*    />*/}
//           {/*    <ProFormCaptcha*/}
//           {/*      fieldProps={{*/}
//           {/*        size: 'large',*/}
//           {/*        prefix: <LockOutlined className={styles.prefixIcon} />,*/}
//           {/*      }}*/}
//           {/*      captchaProps={{*/}
//           {/*        size: 'large',*/}
//           {/*      }}*/}
//           {/*      placeholder={'请输入验证码！'}*/}
//           {/*      captchaTextRender={(timing, count) => {*/}
//           {/*        if (timing) {*/}
//           {/*          return `${count} ${'秒后重新获取'}`;*/}
//           {/*        }*/}
//           {/*        return '获取验证码';*/}
//           {/*      }}*/}
//           {/*      name="captcha"*/}
//           {/*      rules={[*/}
//           {/*        {*/}
//           {/*          required: true,*/}
//           {/*          message: '验证码是必填项！',*/}
//           {/*        },*/}
//           {/*      ]}*/}
//           {/*      onGetCaptcha={async (phone) => {*/}
//           {/*        const result = await getFakeCaptcha({*/}
//           {/*          phone,*/}
//           {/*        });*/}
//           {/*        if (result === false) {*/}
//           {/*          return;*/}
//           {/*        }*/}
//           {/*        message.success('获取验证码成功！验证码为：1234');*/}
//           {/*      }}*/}
//           {/*    />*/}
//           {/*  </>*/}
//           {/*)}*/}
//           <div
//             style={{
//               marginBottom: 24,
//             }}
//           >
//             {/*<ProFormCheckbox noStyle name="autoLogin">*/}
//             {/*  自动注册*/}
//             {/*</ProFormCheckbox>*/}
//             <a
//               style={{
//                 float: 'right',
//               }}
//               href={PLANET_LINK}
//               target="_blank" rel="noreferrer"
//             >
//               忘记密码请联系YG
//             </a>
//           </div>
//         </LoginForm>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Register;
//
//
//
// // import Footer from '@/components/Footer';
// // import { login, register } from '@/services/ant-design-pro/api';
// // import { getFakeCaptcha } from '@/services/ant-design-pro/login';
// // import {
// //   // AlipayCircleOutlined,
// //   LockOutlined,
// //   // MobileOutlined,
// //   // TaobaoCircleOutlined,
// //   UserOutlined,
// //   // WeiboCircleOutlined,
// // } from '@ant-design/icons';
// // import {
// //   LoginForm,
// //   ProFormCaptcha,
// //   // ProFormCheckbox,
// //   ProFormText,
// // } from '@ant-design/pro-components';
// // import { Alert, message, Tabs } from 'antd';
// // import React, { useState } from 'react';
// // import { history, useModel } from 'umi';
// // import styles from './index.less';
// // import { PLANET_LINK, SYSTEM_LOGO } from '@/constant';
// //
// // // const LoginMessage: React.FC<{
// // //   content: string;
// // // }> = ({ content }) => (
// // //   <Alert
// // //     style={{
// // //       marginBottom: 24,
// // //     }}
// // //     message={content}
// // //     type="error"
// // //     showIcon
// // //   />
// // // );
// //
// // const Register: React.FC = () => {
// //   // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
// //   const [type, setType] = useState<string>('account');
// //   // const { initialState, setInitialState } = useModel('@@initialState');
// //
// //   // const fetchUserInfo = async () => {
// //   //   const userInfo = await initialState?.fetchUserInfo?.();
// //   //   if (userInfo) {
// //   //     await setInitialState((s) => ({
// //   //       ...s,
// //   //       currentUser: userInfo,
// //   //     }));
// //   //   }
// //   // };
// //
// //   const handleSubmit = async (values: API.RegisterParams) => {
// //     const { userPassword, checkPassword } = values;
// //     //校验
// //     if (userPassword !== checkPassword) {
// //       message.error('两次输入的密码不一致');
// //       return;
// //     }
// //     try {
// //       // 注册
// //       const id = await register(values);
// //       if (id > 0) {
// //         const defaultLoginSuccessMessage = '注册成功！';
// //         message.success(defaultLoginSuccessMessage);
// //         // await fetchUserInfo();
// //         /** 此方法会跳转到 redirect 参数所在的位置 */
// //         if (!history) return;
// //         const { query } = history.location;
// //         // const { redirect } = query as { redirect: string };
// //         history.push(
// //           // redirect || '/'
// //           {
// //             pathname: 'user/login',
// //             query,
// //           },
// //         );
// //         return;
// //       }
// //       console.log(id);
// //       // 如果失败去设置用户错误信息
// //       // setUserLoginState(id);
// //     } catch (error) {
// //       const defaultLoginFailureMessage = '登录失败，请重试！';
// //       message.error(defaultLoginFailureMessage);
// //     }
// //   };
// //   // const { status, type: loginType } = userLoginState;
// //
// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.content}>
// //         <LoginForm
// //           submitter={{
// //             searchConfig: {
// //               submitText: '注册',
// //             },
// //           }}
// //           logo={<img alt="logo" src={SYSTEM_LOGO} width="40%" />}
// //           title="YG龙岛"
// //           // subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
// //           subTitle={
// //             <a href={PLANET_LINK} target="_blank" rel="noreferrer">
// //               恐龙岛
// //             </a>
// //           }
// //           initialValues={{
// //             autoLogin: true,
// //           }}
// //           // actions={[
// //           //   <FormattedMessage
// //           //     key="loginWith"
// //           //     id="pages.login.loginWith"
// //           //     defaultMessage="其他登录方式"
// //           //   />,
// //           //   <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
// //           //   <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
// //           //   <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
// //           // ]}
// //           onFinish={async (values) => {
// //             await handleSubmit(values as API.RegisterParams);
// //           }}
// //         >
// //           <Tabs activeKey={type} onChange={setType}>
// //             <Tabs.TabPane key="account" tab={'账号密码注册'} />
// //             {/*<Tabs.TabPane*/}
// //             {/*  key="account"*/}
// //             {/*  tab={intl.formatMessage({*/}
// //             {/*    id: 'pages.login.accountLogin.tab',*/}
// //             {/*    defaultMessage: '账户密码注册',*/}
// //             {/*  })}*/}
// //             {/*/>*/}
// //             {/*<Tabs.TabPane*/}
// //             {/*  key="mobile"*/}
// //             {/*  tab={intl.formatMessage({*/}
// //             {/*    id: 'pages.login.phoneLogin.tab',*/}
// //             {/*    defaultMessage: '手机号登录',*/}
// //             {/*  })}*/}
// //             {/*/>*/}
// //           </Tabs>
// //
// //           {/*{status === 'error' && loginType === 'account' && (*/}
// //           {/*  <LoginMessage*/}
// //           {/*    content={intl.formatMessage({*/}
// //           {/*      id: 'pages.login.accountLogin.errorMessage',*/}
// //           {/*      defaultMessage: '账户或密码错误(admin/ant.design)',*/}
// //           {/*    })}*/}
// //           {/*  />*/}
// //           {/*)}*/}
// //           {type === 'account' && (
// //             <>
// //               <ProFormText
// //                 name="userAccount"
// //                 fieldProps={{
// //                   size: 'large',
// //                   prefix: <UserOutlined className={styles.prefixIcon} />,
// //                 }}
// //                 placeholder={'输入账号名'}
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: '请输入用户名!',
// //                   },
// //                 ]}
// //               />
// //               <ProFormText.Password
// //                 name="userPassword"
// //                 fieldProps={{
// //                   size: 'large',
// //                   prefix: <LockOutlined className={styles.prefixIcon} />,
// //                 }}
// //                 placeholder={'请输入密码'}
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: '密码是必填项！',
// //                   },
// //                   {
// //                     min: 8,
// //                     type: 'string',
// //                     message: '长度不能小于8',
// //                   },
// //                 ]}
// //               />
// //               <ProFormText.Password
// //                 name="checkPassword"
// //                 fieldProps={{
// //                   size: 'large',
// //                   prefix: <LockOutlined className={styles.prefixIcon} />,
// //                 }}
// //                 placeholder={'请再次输入密码'}
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: '请再次确认输入密码！',
// //                   },
// //                   {
// //                     min: 8,
// //                     type: 'string',
// //                     message: '长度不能小于8',
// //                   },
// //                 ]}
// //               />
// //             </>
// //           )}
// //
// //           {/*{status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}*/}
// //           {type === 'mobile' && (
// //             <>
// //               {/*<ProFormText*/}
// //               {/*  fieldProps={{*/}
// //               {/*    size: 'large',*/}
// //               {/*    prefix: <MobileOutlined className={styles.prefixIcon} />,*/}
// //               {/*  }}*/}
// //               {/*  name="mobile"*/}
// //               {/*  placeholder={intl.formatMessage({*/}
// //               {/*    id: 'pages.login.phoneNumber.placeholder',*/}
// //               {/*    defaultMessage: '手机号',*/}
// //               {/*  })}*/}
// //               {/*  rules={[*/}
// //               {/*    {*/}
// //               {/*      required: true,*/}
// //               {/*      message: (*/}
// //               {/*        <FormattedMessage*/}
// //               {/*          id="pages.login.phoneNumber.required"*/}
// //               {/*          defaultMessage="请输入手机号！"*/}
// //               {/*        />*/}
// //               {/*      ),*/}
// //               {/*    },*/}
// //               {/*    {*/}
// //               {/*      pattern: /^1\d{10}$/,*/}
// //               {/*      message: (*/}
// //               {/*        <FormattedMessage*/}
// //               {/*          id="pages.login.phoneNumber.invalid"*/}
// //               {/*          defaultMessage="手机号格式错误！"*/}
// //               {/*        />*/}
// //               {/*      ),*/}
// //               {/*    },*/}
// //               {/*  ]}*/}
// //               {/*/>*/}
// //               <ProFormCaptcha
// //                 fieldProps={{
// //                   size: 'large',
// //                   prefix: <LockOutlined className={styles.prefixIcon} />,
// //                 }}
// //                 captchaProps={{
// //                   size: 'large',
// //                 }}
// //                 placeholder={'请输入验证码！'}
// //                 captchaTextRender={(timing, count) => {
// //                   if (timing) {
// //                     return `${count} ${'秒后重新获取'}`;
// //                   }
// //                   return '获取验证码';
// //                 }}
// //                 name="captcha"
// //                 rules={[
// //                   {
// //                     required: true,
// //                     message: '验证码是必填项！',
// //                   },
// //                 ]}
// //                 onGetCaptcha={async (phone) => {
// //                   const result = await getFakeCaptcha({
// //                     phone,
// //                   });
// //                   if (result === false) {
// //                     return;
// //                   }
// //                   message.success('获取验证码成功！验证码为：1234');
// //                 }}
// //               />
// //             </>
// //           )}
// //           <div
// //             style={{
// //               marginBottom: 24,
// //             }}
// //           >
// //             {/*<ProFormCheckbox noStyle name="autoLogin">*/}
// //             {/*  <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />*/}
// //             {/*</ProFormCheckbox>*/}
// //             <a
// //               style={{
// //                 float: 'right',
// //               }}
// //             >
// //               忘记密码 ?
// //             </a>
// //           </div>
// //         </LoginForm>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };
// // export default Register;

// import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
// import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';
// import request from 'umi-request';
import {searchUsers} from "@/services/ant-design-pro/api";
import {Image} from "antd";
// import CurrentUser = API.CurrentUser;
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

// type GithubIssueItem = {
//   url: string;
//   id: number;
//   number: number;
//   title: string;
//   labels: {
//     name: string;
//     color: string;
//   }[];
//   state: string;
//   comments: number;
//   created_at: string;
//   updated_at: string;
//   closed_at?: string;
// };

// @ts-ignore
// @ts-ignore
const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  // {
  //   title: '用户名',
  //   dataIndex: 'username',
  //   copyable: true,
  //   ellipsis: true,
  //   tooltip: '标题过长会自动收缩',
  //   formItemProps: {
  //     rules: [
  //       {
  //         required: true,
  //         message: '此项为必填项',
  //       },
  //     ],
  //   },
  // },
  // {
  //   disable: true,
  //   title: '用户账户',
  //   dataIndex: 'userAccount',
  //   filters: true,
  //   onFilter: true,
  //   ellipsis: true,
  //   valueType: 'select',
  //   valueEnum: {
  //     all: { text: '超长'.repeat(50) },
  //     open: {
  //       text: '未解决',
  //       status: 'Error',
  //     },
  //     closed: {
  //       text: '已解决',
  //       status: 'Success',
  //       disabled: true,
  //     },
  //     processing: {
  //       text: '解决中',
  //       status: 'Processing',
  //     },
  //   },
  // },
  // {
  //   disable: true,
  //   title: '标签',
  //   dataIndex: 'labels',
  //   search: false,
  //   renderFormItem: (_, { defaultRender }) => {
  //     return defaultRender(_);
  //   },
  //   render: (_, record) => (
  //     <Space>
  //       {record.labels.map(({ name, color }) => (
  //         <Tag color={color} key={name}>
  //           {name}
  //         </Tag>
  //       ))}
  //     </Space>
  //   ),
  // },
  // {
  {
    title:'用户名',
    dataIndex:'username',
    copyable:true
  },
  {
    title:'用户账号',
    dataIndex:'userAccount',
    copyable:true
  },
  {
    title:'头像',
    dataIndex:'avatarUrl',
    // copyable:true
    render:(_,record)=>(
      <div>
        <Image src={record.avatarUrl} width={100}/>
      </div>
    )
  },
  {
    title:'性别',
    dataIndex:'gender',

  },
  {
    title:'电话',
    dataIndex:'phone',
    copyable:true
  },
  {
    title:'邮件',
    dataIndex:'email',
    copyable:true
  },
  {
    title:'状态',
    dataIndex:'userStatus'
  },
  {
    title:'身份认证编号',
    dataIndex:'planetCode'
  },
  {
    title:'角色',
    dataIndex:'userRole',
    valueType: 'select',
    valueEnum: {
      0:{text:'普通用户',status:'Default'},
      1:{
        text:'管理员',
        status:'Success',
      },
    },
  },
  {
    title:'创建时间',
    dataIndex:'createTime',
    valueType:'dateTime',
  },




  //   title: '创建时间',
  //   key: 'showTime',
  //   dataIndex: 'created_at',
  //   valueType: 'date',
  //   sorter: true,
  //   hideInSearch: true,
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'created_at',
  //   valueType: 'dateRange',
  //   hideInTable: true,
  //   search: {
  //     transform: (value) => {
  //       return {
  //         startTime: value[0],
  //         endTime: value[1],
  //       };
  //     },
  //   },
  // },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        // await waitTime(2000);
        // return request<{
        //   data: GithubIssueItem[];
        // }>('https://proapi.azurewebsites.net/github/issues', {
        //   params,
        // });
        const userList = await searchUsers();
        return{
          data:userList
        }
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      // toolBarRender={() => [
      //   <Button
      //     key="button"
      //     icon={<PlusOutlined />}
      //     onClick={() => {
      //       actionRef.current?.reload();
      //     }}
      //     type="primary"
      //   >
      //     新建
      //   </Button>,
      //   // <Dropdown
      //   //   key="menu"
      //   //   menu={{
      //   //     items: [
      //   //       {
      //   //         label: '1st item',
      //   //         key: '1',
      //   //       },
      //   //       {
      //   //         label: '2nd item',
      //   //         key: '1',
      //   //       },
      //   //       {
      //   //         label: '3rd item',
      //   //         key: '1',
      //   //       },
      //   //     ],
      //   //   }}
      //   // >
      //     <Button>
      //       <EllipsisOutlined />
      //     </Button>
      //   // </Dropdown>,
      // ]}
    />
  );
};
