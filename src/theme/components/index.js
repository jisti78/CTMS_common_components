import button from './button';
import checkbox from './checkbox';
import TimelineStyle from '../../custom-components/timeline/TimelineStyle';
import AccordionStyle from '../../custom-components/accordion-view/AccordionStyle';
import RadioStyles from '../../custom-components/RadioButton/RadioStyles';
import TabVariant from '../../custom-components/custom-tabs/variant';
import { alertTheme } from '../../custom-components/Toaster';

const componentStyles = {
  components: {
    Button: button,
    Checkbox: checkbox.component,
    Accordion: AccordionStyle.component,
    Tabs: TabVariant,
    Radio: RadioStyles.component,
    Alert: alertTheme
  },

  styles: {
    global: {
      ...TimelineStyle.style,

    }
  }
};

export default componentStyles;
