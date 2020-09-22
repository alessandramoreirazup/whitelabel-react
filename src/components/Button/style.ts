import styled from 'styled-components';
import whitelabel from '../../whitelabel-beta-fluent';

const blockAccent = whitelabel?.button?.accent?.block?.style;
const blockDefault = whitelabel?.button?.default?.block?.style;
const blockText = whitelabel?.button?.text?.block?.style;

export const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'all ease-in 0.2s',

  // ---------------------------------------------------------------------------
  // Type 1 - Accent
  // ---------------------------------------------------------------------------

  // Base
  ...blockAccent.base,

  // interactivity
  '&.accent': blockAccent?.interactivity?.rest,
  '&.accent:hover': blockAccent?.interactivity?.hover,
  '&.accent:focus': blockAccent?.interactivity?.focus,
  '&.accent:pressed': blockAccent?.interactivity?.pressed,
  '&.accent:visited': blockAccent?.interactivity?.visited,

  // Validation
  '&.accent.disabled': blockAccent?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 2 - Default
  // ---------------------------------------------------------------------------

  // Base
  ...blockDefault.base,

  // interactivity
  '&.default': blockDefault?.interactivity?.rest,
  '&.default:hover': blockDefault?.interactivity?.hover,
  '&.default:focus': blockDefault?.interactivity?.focus,
  '&.default:pressed': blockDefault?.interactivity?.pressed,
  '&.default:visited': blockDefault?.interactivity?.visited,

  // Validation
  '&.default.disabled': blockDefault?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 3 - Text
  // ---------------------------------------------------------------------------

  // Base
  ...blockText.base,

  // interactivity
  '&.text': blockText?.interactivity?.rest,
  '&.text:hover': blockText?.interactivity?.hover,
  '&.text:focus': blockText?.interactivity?.focus,
  '&.text:pressed': blockText?.interactivity?.pressed,
  '&.text:visited': blockText?.interactivity?.visited,

  // Validation
  '&.text.disabled': blockText?.validation?.disabled,
});

const textAccent = whitelabel?.button?.accent?.block?.elements?.text;
const textDefault = whitelabel?.button?.default?.block?.elements?.text;
const textText = whitelabel?.button?.text?.block?.elements?.text;

export const StyledText = styled.span({
  // ---------------------------------------------------------------------------
  // Type 1 - Accent
  // ---------------------------------------------------------------------------

  // Base
  ...textAccent.base,

  // interactivity
  '&.accent': textAccent?.interactivity?.rest,
  '&.accent:hover': textAccent?.interactivity?.hover,
  '&.accent:focus': textAccent?.interactivity?.focus,
  '&.accent:pressed': textAccent?.interactivity?.pressed,
  '&.accent:visited': textAccent?.interactivity?.visited,

  // Validation
  '&.accent.disabled': textAccent?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 2 - Default
  // ---------------------------------------------------------------------------

  // Base
  ...textDefault.base,

  // interactivity
  '&.default': textDefault?.interactivity?.rest,
  '&.default:hover': textDefault?.interactivity?.hover,
  '&.default:focus': textDefault?.interactivity?.focus,
  '&.default:pressed': textDefault?.interactivity?.pressed,
  '&.default:visited': textDefault?.interactivity?.visited,

  // Validation
  '&.default.disabled': textDefault?.validation?.disabled,

  // ---------------------------------------------------------------------------
  // Type 3 - Text
  // ---------------------------------------------------------------------------

  // Base
  ...textText.base,

  // interactivity
  '&.text': textText?.interactivity?.rest,
  '&.text:hover': textText?.interactivity?.hover,
  '&.text:focus': textText?.interactivity?.focus,
  '&.text:pressed': textText?.interactivity?.pressed,
  '&.text:visited': textText?.interactivity?.visited,

  // Validation
  '&.text.disabled': textText?.validation?.disabled,
});