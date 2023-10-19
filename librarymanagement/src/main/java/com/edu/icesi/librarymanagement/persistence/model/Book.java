package icesi.edu.co.librarymanagement.persistence.model;

import javax.persitence.*;
import java.util.List;

//Lombok
import lombok.NoArgsConstructor;
import lombok.Data

@Entity
@Data
@NoArgsConstructor
public class Book{
    @GeneratedValue(startegy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Data datePublication;


}

