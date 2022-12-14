// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  statistics: getIcon('ic_analytics'),
  monitoring: getIcon('ic_dashboard'),
  chat: getIcon('ic_chat'),
  setting: getIcon('ic_settings'),
  charge: getIcon('ic_charge'),
  finance: getIcon('ic_finance'),
  support: getIcon('ic_support'),
  report: getIcon('ic_report')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Основной',
    items: [
      { title: 'Мониторинг', path: '/dashboard/monitoring', icon: ICONS.monitoring },
      {
        title: 'Мои станции',
        path: '/dashboard/station',
        icon: ICONS.statistics,
        children: [
          { title: 'Мои станции', path: '/dashboard/station/MyStation' },
          { title: 'Добавление новой страницы', path: '/dashboard/station/AddNewStantion' },
          { title: 'Страница одной станции', path: '/dashboard/station/PageOfOneStation' },
        ],
      },
      {
        title: 'Финансы',
        path: '/dashboard/finances',
        icon: ICONS.finance,
        children: [
          { title: 'Калькулятор расходов', path: '/dashboard/finances/CalculatorExp' },
          { title: 'Начисления', path: '/dashboard/finances/Accruals' },
          { title: 'Выплаты', path: '/dashboard/finances/Payments' },
        ],
      },
      {
        title: 'Техническая поддержка',
        path: '/dashboard/support',
        icon: ICONS.support,
        children: [
          { title: 'Чат', path: '/dashboard/support/chat' },
          { title: 'Сервис', path: '/dashboard/support/ServicePage' },
          { title: 'Часто задаваемые вопросы', path: '/dashboard/support/FAQ' },
        ],
      },
      { title: 'Отчётность', path: '/dashboard/ReportingPage', icon: ICONS.report },
      { title: 'Профиль', path: '/dashboard/Profile', icon: ICONS.user },
    ],
  },

];

export default sidebarConfig;
