const barChart = document.getElementById("barChart");
const updateChartBtn = document.getElementById("updateChartBtn");

// 初期データ
let chartData = [
  { category: "A", value: 70 },
  { category: "B", value: 120 },
  { category: "C", value: 90 },
  { category: "D", value: 150 },
  { category: "E", value: 60 },
];

const chartHeight = 300; // bar-chartのCSS高さ（px）
const maxValue = 200; // データの最大値の目安（グラフのスケールを決める）

function drawChart(data) {
  // 既存の棒とラベルを削除
  const existingBars = barChart.querySelectorAll(".bar");
  existingBars.forEach((bar) => bar.remove());

  data.forEach((item) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    // 棒の高さを計算 (maxValueに対する割合)
    const barHeight = (item.value / maxValue) * chartHeight;
    bar.style.height = `${barHeight}px`;

    // 値のラベル
    const valueLabel = document.createElement("span");
    valueLabel.classList.add("value-label");
    valueLabel.textContent = item.value;
    bar.appendChild(valueLabel);

    // カテゴリのラベル
    const categoryLabel = document.createElement("span");
    categoryLabel.classList.add("category-label");
    categoryLabel.textContent = item.category;
    bar.appendChild(categoryLabel);

    barChart.appendChild(bar);
  });
}

// データを更新する関数（ランダムなデータに更新）
function updateData() {
  chartData = chartData.map((item) => ({
    category: item.category,
    value: Math.floor(Math.random() * (maxValue - 20) + 20), // 20からmaxValueまでのランダムな値
  }));
  drawChart(chartData);
}

// 初期描画
drawChart(chartData);

// ボタンクリックでデータを更新
updateChartBtn.addEventListener("click", updateData);
