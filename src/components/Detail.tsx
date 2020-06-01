import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

interface Props {}
export const Detail: React.FC<Props> = (props) => {
  const [month, setMonth] = useState(Number(dayjs().format('MM')));
  const [year, setYear] = useState(Number(dayjs().format('YYYY')));

  const headers = [
    '月',
    '日',
    '曜日',
    '開始時間',
    '終了時間',
    '休憩',
    '勤務時間',
    '補足',
  ];

  const title = () => `勤務表 ${year}年${month}月`;

  const csv = () => {
    const start = dayjs(`${year}-${month}-01`);
    const nextMonth = start.add(1, 'month');
    let dates: dayjs.Dayjs[] = [];
    for (let d = start; d.isBefore(nextMonth); d = d.add(1, 'day')) {
      dates.push(d);
    }

    return dates.map((d: dayjs.Dayjs) => {
      const youbi = d.format('dd');
      const isHoliday = youbi === '土' || youbi === '日';
      return [
        d.format('MM'),
        d.format('DD'),
        youbi,
        isHoliday ? '' : '10:00',
        isHoliday ? '' : '19:00',
        isHoliday ? '' : '1:00',
        isHoliday ? '' : '8:00',
        '',
      ];
    });
  };

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMonth(Number(e.currentTarget.value));

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(Number(e.currentTarget.value));

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div style={{ padding: 20 }}>
        <input type="number" value={year} onChange={onChangeYear} />年
        <input type="number" value={month} onChange={onChangeMonth} />月
      </div>

      <CSVLink data={csv()} title={title()} headers={headers}>
        Download CSV
      </CSVLink>

      <table
        style={{ padding: 10, background: '#f3fdff', borderRadius: '4px' }}
      >
        <tbody>
          <tr>
            {headers.map((h) => (
              <td key={h} style={{ padding: '5px 10px' }}>
                {h}
              </td>
            ))}
          </tr>

          {csv().map((record) => (
            <tr key={record[1]}>
              {record.map((d, i) => (
                <td key={`${d}_${i}`} style={{ padding: '5px 10px' }}>
                  {d}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
