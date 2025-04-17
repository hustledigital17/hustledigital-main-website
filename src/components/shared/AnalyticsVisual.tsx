import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const AnalyticsVisual = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const data = [
    { name: 'Q1', value: 75 },
    { name: 'Q2', value: 90 },
    { name: 'Q3', value: 80 },
    { name: 'Q4', value: 45 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative py-10 flex flex-col items-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-md bg-primary/5 rounded-lg"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/lovable-uploads/analytics-mobile-app.png"
          alt="Mobile Analytics Dashboard"
          className="max-w-full h-auto object-contain mb-6"
          style={{
            filter: "drop-shadow(0px 4px 8px rgba(234, 56, 76, 0.2))",
            maxHeight: "320px",
            opacity: 0.9
          }}
        />
        
        <div className="w-full max-w-xs bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-center">Performance Metrics</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide={true} />
                <Bar
                  dataKey="value"
                  animationDuration={1500}
                  animationBegin={animationStarted ? 0 : 1500}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#ea384c" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-center text-gray-600 mt-2">
            Data-driven results you can measure
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsVisual;
