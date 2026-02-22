const StatCard = ({ icon: Icon, title, value, progress, color }) => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all">
      <div className="card-body flex-row items-center justify-between p-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-lg bg-opacity-10 ${color} text-current`}>
              <Icon size={20} />
            </div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
          </div>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        
        <div className={`radial-progress ${color.replace('bg-', 'text-')}`} style={{ "--value": progress, "--size": "3rem", "--thickness": "4px" }} role="progressbar">
           <span className="text-[10px] font-bold text-base-content">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;