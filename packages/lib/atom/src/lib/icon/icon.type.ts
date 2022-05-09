export interface IconBase {
  paths: string[];
  attrs: unknown[];
  width?: number | string;
  defaultCode?: number | string | never;
  id?: number | string | never;
  code?: number | string | never;
  codes?: number[];
}

export interface IconSetItem {
  properties: {
    name: string;
  };
  attrs?: string[];
  paths?: string[];
  icon: IconBase | null;
  code?: number | null;
}

export interface IconSet {
  icons: IconSetItem[];
}

export interface IconProps {
  icon: string;
  color?: string;
  dataTestid?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
