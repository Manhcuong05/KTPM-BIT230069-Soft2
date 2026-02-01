import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.Collections;

public class StudentAnalyzerTest {
    StudentAnalyzer analyzer = new StudentAnalyzer();

    @Test
    public void testCountExcellentStudents() {
        // Test 1: Bình thường (có giỏi, có khá, có điểm lỗi âm)
        assertEquals(2, analyzer.countExcellentStudents(Arrays.asList(9.0, 8.5, 5.0, -1.0, 11.0)));

        // Test 2: Rỗng
        assertEquals(0, analyzer.countExcellentStudents(Collections.emptyList()));
    }

    @Test
    public void testCalculateValidAverage() {
        // Test 1: (9 + 7) / 2 = 8.0. Điểm 15 và -2 bị loại.
        assertEquals(8.0, analyzer.calculateValidAverage(Arrays.asList(9.0, 7.0, 15.0, -2.0)), 0.01);

        // Test 2: Rỗng
        assertEquals(0.0, analyzer.calculateValidAverage(Collections.emptyList()), 0.01);
    }
}
