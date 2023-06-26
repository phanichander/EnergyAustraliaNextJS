import { OTHER_FESTIVAL } from '@/constants/displayMessage';
import { RecordLabels } from '@/constants/types';
import { Collapse } from 'antd';

interface Props {
  data: RecordLabels[];
}

export const FestivalList = ({ data }: Props) => {
  const recordList = () => {
    const recordList: any[] = [];
    {data.map((recordLabel, index) =>{
      const items: any = {};
      items.key = `${recordLabel.name}-${index}`;
      items.label = recordLabel.name || OTHER_FESTIVAL;
      items.children = recordLabel.bands.map((band, index) => (
        <p key={`${band.name}-${index}`}>
          {band.name}
        </p>
      ))

      recordList.push(items);
    })}

    return recordList;
  }

  return (
    <Collapse accordion items={recordList()} />
  )
};
