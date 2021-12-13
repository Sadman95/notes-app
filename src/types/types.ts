export interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

export interface Note{
    id: number,
    title: string,
    description: string,
    color: string,
    date: string
} 