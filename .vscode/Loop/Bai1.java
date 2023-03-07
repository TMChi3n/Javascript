import java.util.Scanner;

// Tính trung bình cộng các số trong mảng sử dụng Scanner
public class Bai1{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap cac phan tu trong mang : ");
        int n = sc.nextInt();
        float[] Array = new float[n];
        int total = 0;
        for(int i = 0; i < Array.length; i++){
             System.out.println("Nhap gia tri vao phan tu thu " + (i+1) + ":");
             Array[n] = sc.nextFloat();
        }
        
        for(int i = 0; i < Array.length; i++){
            total += Array[i];
        }
        


    }
}

