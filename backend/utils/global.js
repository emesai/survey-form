function calculateSatisfaction(scores) {
  if (!scores || scores.length === 0) {
    return { average_score: 0, category: "Tidak Ada Data" };
  }

  const avgScore = scores.reduce((sum, v) => sum + v, 0) / scores.length;

  let category = "Tidak Puas";
  if (avgScore >= 4.1) category = "Sangat Puas";
  else if (avgScore >= 3.1) category = "Puas";
  else if (avgScore >= 2.1) category = "Netral";
  else if (avgScore >= 1.1) category = "Kurang Puas";

  return {
    average_score: Number(avgScore.toFixed(2)),
    category,
  };
}

module.exports = { calculateSatisfaction };
