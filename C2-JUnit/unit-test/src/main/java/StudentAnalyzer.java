import java.util.List;

public class StudentAnalyzer {

    // Hàm đếm học sinh giỏi (Issue #1)
    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }
        int count = 0;
        for (Double score : scores) {
            if (score < 0 || score > 10) continue; // Bỏ qua điểm lỗi
            if (score >= 8.0) count++;
        }
        return count;
    }

    // Hàm tính trung bình (Issue #2)
    public double calculateValidAverage(List<Double> scores) {
        if (scores == null || scores.isEmpty()) return 0.0;

        double sum = 0;
        int count = 0;
        for (Double score : scores) {
            if (score >= 0 && score <= 10) {
                sum += score;
                count++;
            }
        }
        return count == 0 ? 0.0 : sum / count;
    }
}
