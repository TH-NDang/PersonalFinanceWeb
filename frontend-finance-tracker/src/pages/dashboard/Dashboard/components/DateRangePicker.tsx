import { useState } from "react";
import { Card } from "../../../../components/common/ui/card";
import { Calendar } from "lucide-react";

interface Period {
  startDate: Date;
  endDate: Date;
}

interface QuickPick {
  label: string;
  getValue: () => Period;
}

interface DateRangePickerProps {
  onDateChange: (period: Period) => void;
}

const DateRangePicker = ({ onDateChange }: DateRangePickerProps) => {
  const [showQuickPicks, setShowQuickPicks] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>({
    startDate: new Date(),
    endDate: new Date()
  });

  const quickPicks: QuickPick[] = [
    {
      label: "7 ngày qua",
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 7);
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "30 ngày qua",
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 30);
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "Quý này",
      getValue: () => {
        const now = new Date();
        const start = new Date(
          now.getFullYear(),
          Math.floor(now.getMonth() / 3) * 3,
          1
        );
        const end = new Date(
          now.getFullYear(),
          Math.floor(now.getMonth() / 3) * 3 + 3,
          0
        );
        return { startDate: start, endDate: end };
      },
    },
    {
      label: "Năm nay",
      getValue: () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 1);
        const end = new Date(now.getFullYear(), 11, 31);
        return { startDate: start, endDate: end };
      },
    },
  ];

  const handleQuickPickSelect = (quickPick: QuickPick) => {
    const dateRange = quickPick.getValue();
    setSelectedPeriod(dateRange);
    onDateChange(dateRange);
    setShowQuickPicks(false);
  };

  const handleCustomDateChange = (date: string, type: 'start' | 'end') => {
    const newDate = new Date(date);
    if (!isNaN(newDate.getTime())) {
      const newPeriod = {
        ...selectedPeriod,
        [type === 'start' ? 'startDate' : 'endDate']: newDate
      };
      setSelectedPeriod(newPeriod);
      onDateChange(newPeriod);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowQuickPicks(!showQuickPicks)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border hover:bg-gray-50"
      >
        <Calendar className="w-4 h-4" />
        <span>Chọn khoảng thời gian</span>
      </button>

      {showQuickPicks && (
        <Card className="absolute top-full mt-2 right-0 p-2 min-w-[200px] z-50">
          <div className="space-y-1">
            {quickPicks.map((pick, index) => (
              <button
                key={index}
                onClick={() => handleQuickPickSelect(pick)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md"
              >
                {pick.label}
              </button>
            ))}
          </div>
          <div className="border-t mt-2 pt-2">
            <div className="text-xs text-gray-500 mb-2">
              Hoặc chọn khoảng cụ thể:
            </div>
            <div className="space-y-2">
              <input
                type="date"
                value={selectedPeriod.startDate.toISOString().split('T')[0]}
                onChange={(e) => handleCustomDateChange(e.target.value, 'start')}
                className="w-full p-2 border rounded-md text-sm"
              />
              <input
                type="date"
                value={selectedPeriod.endDate.toISOString().split('T')[0]}
                onChange={(e) => handleCustomDateChange(e.target.value, 'end')}
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DateRangePicker;
